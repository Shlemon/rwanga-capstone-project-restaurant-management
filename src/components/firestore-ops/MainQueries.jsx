import { db } from '../../Firebase/firestore-cloud';
import { doc, collection, getDoc, getDocs, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
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
            if(doc.id !== 'index'){
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

// Query - Set
export async function FactoryReset() {
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
                console.log('Skipping index')
            } else {
                deleteDoc(doc(db, `${pagePath}/${dbDoc.id}`))
                deleteDoc(doc(db, `${routePath}/${dbDoc.id}`))
            }

        }
    )

    // Third, fill collection with default documents

    // Get default documents
    const [pageData, routeData ] = await QueryCollectionData('pages/menu-pages/default/pages/public', 'pages/menu-pages/default/routes/public', false);

    console.log('Route data ', routeData);
    console.log('Page data ', pageData);

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

export async function UpdateMenuAdd(metaData) {
    // Define which document to get
    const pageRef = doc(db, `pages/menu-pages/dynamic/pages/public/${metaData.createItemIn}`);

    // Get the document
    const pageSnap = await getDoc(pageRef);

    // Read Document
    const pageData = pageSnap.data().pageContent;
    console.log('PageDataRoot ', pageData);

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
                if(metaData.isChecked){
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

export async function UpdateCategoryAdd(metaData) {
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