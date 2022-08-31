import React from 'react';
import axios from 'axios';
import { db, cloudStorage } from '../../Firebase/firestore-cloud';
import { doc, collection, getDoc, getDocs, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { ref, listAll, getMetadata, getDownloadURL } from 'firebase/storage';
import { PagesObject } from '../../pages/Menus/Default/MenuDesignOne/MenuPagesData/MenuPagesData';

// Helper - Get
async function QueryCollectionData(pathToPages, pathToRoutes, useSnapshot) {
    // Helper function to query data from COLLECTION

    console.log('Using Snapshot::', useSnapshot);

    // Temp data holders
    const pageData = [];
    const routeData = [];

    // Firestore references
    const pageDocRef = collection(db, pathToPages);
    const routeDocRef = collection(db, pathToRoutes);

    // Data collectors
    let pagesDocSnap = undefined;
    let routesDocSnap = undefined;

    if(useSnapshot){
        pagesDocSnap = onSnapshot(pageDocRef);
        routesDocSnap = onSnapshot(routeDocRef);
    } else {
        pagesDocSnap = await getDocs(pageDocRef);
        routesDocSnap = await getDocs(routeDocRef);
    }

    pagesDocSnap.forEach(
        doc => {
            const responseData = doc.data();
            if(doc.id !== 'index'){
                responseData.pageContent.forEach((subCat) => {
                    subCat.items.forEach(async (item) => {
                        const img = new Image();
                        await axios.get(item.image, {responseType: 'blob'})
                        .then((response) => {
                            img.src = URL.createObjectURL(response.data);
                        })
                        item.image = img.src;
                        console.log('Item: ', item);
                    })
                })
                pageData[doc.id] = doc.data()
            }
        }
    )
    routesDocSnap.forEach(
        doc => {
            if(doc.id !== 'index') {
                routeData[doc.id] = doc.data()
            }
        }
    )
    return [pageData, routeData];
}

// Query - Get
export async function GetDynamicMenuPages()
{
    const pageRef = 'pages/menu-pages/dynamic/pages/public';
    const routeRef = 'pages/menu-pages/dynamic/routes/public';

    return QueryCollectionData(pageRef, routeRef, false);
}

// Query - Get
export async function GetMainPages()
{
    // Temp data holders
    const routeData = {};

    // Firestore references
    const routeDocRef = collection(db, 'pages', 'main-pages', 'first');

    // Data collectors
    const routesDocSnap = await getDocs(routeDocRef);

    routesDocSnap.forEach(
        doc => {
            routeData[doc.id] = doc.data()
        }
    )
    return routeData;
}


// // TEST
// export async function RequestImageFromStorage(imagePath){
//     const responseData = await getDownloadURL(ref(cloudStorage, imagePath))
//     .then(async (url) => {
//         try {
//             const response = await axios.get(url, { responseType: 'blob' });
//             return URL.createObjectURL(response.data);
//         } catch (error) {
//             console.log('Axios:: ', error);
//         }
//     })
//     .catch((error) => {
//         console.log('CloudStorage:: ', error);
//     })
//     return responseData;
// }

// Query - Get
export async function GetDynamicHomePages(useSnapshot) {
    const itemData = [];
    const itemColRef = collection(db, 'pages/home-pages/dynamic/');
    let itemDocSnap = undefined;

    if(useSnapshot){
        itemDocSnap = onSnapshot(itemColRef);
    } else{
        itemDocSnap = await getDocs(itemColRef);
    }

    itemDocSnap.forEach(
        async (doc) => {
            const data = doc.data();
            if(doc.id === 'index'){
                //pass
            } else{
                itemData[doc.id] = data;
                const img = new Image();
                await axios.get(data.image, {responseType: 'blob'})
                .then((response) => {
                    img.src = URL.createObjectURL(response.data);
                })
                // const responseImg = await RequestImageFromStorage(itemData[doc.id].image);
                itemData[doc.id].image = img.src;
            }
        }
    )

    return itemData;
}

// Query - Set
export async function AddMenuItem(metaData) {
    // Define which document to get
    const pageRef = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.createItemIn}`);

    // Get the document
    const pageSnap = await getDoc(pageRef);

    // Read Document
    const pageData = pageSnap.data().pageContent;

    const newItem = {
        name: metaData.itemName,
        ingredients: metaData.itemDescription,
        image: '',
        price: 0
    }

    // Add to Pages
    pageData.forEach(
        (array) => {
            if(array.name === metaData.contentType){
                if(metaData.resetMenu){
                    let notFound = true;
                    array.forEach(
                        (arrayItem) => {
                            if(arrayItem.name === metaData.itemName){
                                // Update this specific index
                                arrayItem = newItem;
                                notFound = false;
                            }
                        }
                    )
                    if(notFound){
                        array.items.push(newItem)
                    }
                } else {
                    array.items.push(newItem)
                }
            }
        }
    )
    await setDoc(pageRef, {
        pageName: metaData.createItemIn,
        pageContent: pageData,
    });
}

// Query - Set
export async function AddMenuCategory(metaData) {
    const pageRef = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.newCategory}`);
    const routeRef = doc(db, `pages/menu-pages/dynamic/routes/public/${metaData.newCategory}`);

    await setDoc(pageRef, {
        pageName: metaData.newCategory,
        pageContent: [
            {
                name: metaData.contentType,
                items: [
                    {name: metaData.itemName, ingredients: metaData.itemDescription, image: '', price: 0},
                ]
            }              
        ]
    });
    await setDoc(routeRef, {
        title: metaData.newCategory,
        route: metaData.newCategory,
        eventkey: `link-${metaData.newCategory}`
    })
}

// Query - Set
export async function AddMenuContentType(metaData) {
    // Define which document to get
    const pageRef = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.createItemIn}`);

    // Get the document
    const pageSnap = await getDoc(pageRef);

    // Read Document and update it
    const pageData = pageSnap.data().pageContent;

    pageData.push({name: metaData.contentType, items: []})

    await setDoc(pageRef, {
        pageName: metaData.createItemIn,
        pageContent: pageData,
    });
}

// Query - Set_Delete
// NEW FUNCTION FORMAT TO MINIMIZE CODE AND PROMOTE REUSABILITY
export async function EditMenuCategory({mode, ...metaData}) {
    // Routes and document to delete
    const pageRef = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.selectedCategory}`);
    const routeRef = doc(db, `pages/menu-pages/dynamic/routes/public/${metaData.selectedCategory}`);

    // Get the document(if mode is edit, these will be used otherwise they will be ignored)
    let pageSnap = await getDoc(pageRef);
    pageSnap = pageSnap.data();
    pageSnap.pageName = metaData.newCategory;

    // Delete Document
    await deleteDoc(pageRef);
    await deleteDoc(routeRef);

    if(mode === 'edit'){
        // New Routes
        const newPage = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.newCategory}`);
        const newRoute = doc(db, `pages/menu-pages/dynamic/routes/public/${metaData.newCategory}`);

        // Create new document with new category name(with same old data)
        await setDoc(newPage, pageSnap);
        await setDoc(newRoute, {
            title: metaData.newCategory,
            route: metaData.newCategory.replaceAll(" ", ""),
            eventkey: `link-${metaData.newCategory.replaceAll(" ", "")}`,
        });
    } else if(mode === 'delete') {
        //pass
    }
}

// Query - Set_Delete
export async function EditMenuItem({mode, ...metaData}) {
    const pageRef = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.createItemIn}`);

    // Get the document
    let pageSnap = await getDoc(pageRef);
    pageSnap = pageSnap.data();

    pageSnap.pageContent.forEach(
        (array) => {
            array.items.forEach(
                (index, id) => {
                    if(index.name === metaData.itemName){
                        if(mode === 'edit'){
                            index.name = metaData.newItemName;
                        } else if(mode === 'delete'){
                            array.items.splice(id, 1);
                        }
                    }})
                }
            )
    // Create new document with new category name(with same old data)
    await setDoc(pageRef, pageSnap);
}

// Query - Set_Delete
export async function EditMenuContent({mode, ...metaData}) {
    const pageRef = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.createItemIn}`);

    // Get the document
    let pageSnap = await getDoc(pageRef);
    pageSnap = pageSnap.data();

    pageSnap.pageContent.forEach(
        (array, id) => {
            if(array.name === metaData.contentType){
                if(mode === 'edit'){
                    array.name = metaData.newItemName;
                } else if(mode === 'delete'){
                    pageSnap.pageContent.splice(id, 1);
                }
            }
        }
    )

    // Create new document with new category name(with same old data)
    await setDoc(pageRef, pageSnap);
}

// Query - Set
// DONT USE THIS FUNCTION
export function SetDefault()
{
    const curItem = PagesObject();

    curItem.forEach(
        (menu) => {
            const docRefPage = doc(db, 'pages', 'menu-pages', 'default', 'pages', 'public', menu.pageName);
            const docRefRoute = doc(db, 'pages', 'menu-pages', 'default', 'routes', 'public', menu.pageName);

            setDoc(docRefPage, {
                pageName: menu.pageName,
                pageContent: menu.pageContent,
            })
            setDoc(docRefRoute, {
                title: menu.pageName,
                route: menu.pageName,
                eventkey: `link-${menu.pageName}`,
            })
        }
    )
}

const ResetMenu = async() => {
    const pagePath = 'pages/menu-pages/dynamic/pages/public';
    const routePath = 'pages/menu-pages/dynamic/routes/public';

    // First, get all docs in collection and delete them
    // both in pages and routes
    const pageRef = collection(db, pagePath);
    const pagesSnap = await getDocs(pageRef);

    
    // Second, delete every document in firestore
    pagesSnap.forEach(
        (dbDoc) => {
            if(dbDoc.id === 'index'){
                console.log('')
            } else {
                deleteDoc(doc(db, `${pagePath}/${dbDoc.id}`))
                deleteDoc(doc(db, `${routePath}/${dbDoc.id}`))
            }

        }
    )

    // Third, fill collection with default documents

    // Get default documents
    const [pageData, routeData ] = await QueryCollectionData('pages/menu-pages/default/pages/public', 'pages/menu-pages/default/routes/public', false);

    Object.entries(pageData).forEach(
        async(dbDoc) => {
            dbDoc = dbDoc[1];
            await setDoc(doc(db, `${pagePath}/${dbDoc.pageName}`), {
                pageName: dbDoc.pageName,
                pageContent: dbDoc.pageContent
            });
        }
    )
    Object.entries(routeData).forEach(
        async(dbDoc) => {
            await setDoc(doc(db, `${routePath}/${dbDoc[0]}`), {
                title: dbDoc[1].title,
                route: dbDoc[1].route,
                eventkey: dbDoc[1].eventkey
            });
        }
    )
}

const ResetHomepage = async() => {
    const defaultPath = 'pages/home-pages/default';
    const dynamicPath = 'pages/home-pages/dynamic';

    const defaultColRef = collection(db, defaultPath);
    const dynamicColRef = collection(db, dynamicPath);

    // Get and Reset dynamic collection
    let homepageSnap = await getDocs(dynamicColRef);

    // Clear Dynamic Collection
    homepageSnap.forEach(async(dbDoc) => {
        if(dbDoc.id === 'index'){
            //pass
        } else {
            deleteDoc(doc(db, `${dynamicPath}/${dbDoc.id}`));
        }
    })

    // Get Default documents and fill in
    homepageSnap = await getDocs(defaultColRef);
    homepageSnap.forEach(async(dbDoc) => {
        if(dbDoc.id === 'index') {
            //pass
        } else {
            await setDoc(doc(db, `${dynamicPath}/${dbDoc.id}`), dbDoc.data());
        }
    })
}

// Query - Set
export async function FactoryReset(metaData) {
    const promiseList = [];

    if(metaData.resetMenu){
        promiseList.push(ResetMenu);
    }
    if(metaData.resetHomepage){
        promiseList.push(ResetHomepage);
    }
    
    await Promise.all([promiseList.forEach((f) => f())]);
}