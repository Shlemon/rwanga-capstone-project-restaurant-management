import { db } from '../../Firebase/firestore-cloud';
import { doc, collection, getDoc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { PagesObject } from '../../pages/Menus/Default/MenuDesignOne/MenuPagesData/MenuPagesData';

// export function GetMainPages() 
// {
//     const [response, setResponse] = useState({});
//     useEffect(() => {
//         ;(async() => {
//             const docRef = doc(db, 'pages/main-pages');
//             const docSnap = await getDoc(docRef);
//             const data = docSnap.data();
//             setResponse(data);
//         })()
//       }, []);
//     return response;
// }

// Helper function to query data from COLLECTION
async function QueryCollectionData(pathToPages, pathToRoutes) {
    // Temp data holders
    const pageData = [];
    const routeData = [];

    // Firestore references
    const pageDocRef = collection(db, pathToPages);
    const routeDocRef = collection(db, pathToRoutes);

    // Data collectors
    const pagesDocSnap = await getDocs(pageDocRef);
    const routesDocSnap = await getDocs(routeDocRef);

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

// Helper function to reset data in DOCUMENT
async function SetDocumentReset(pathToDoc, data) {
    const docRef = doc(db, pathToDoc);
    await setDoc(docRef, data)   
}


export async function GetDynamicMenuPages()
{
    const pageRef = 'pages/menu-pages/dynamic/pages/public';
    const routeRef = 'pages/menu-pages/dynamic/routes/public';

    return QueryCollectionData(pageRef, routeRef);
}


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


export async function FactoryReset() {
    const pagePath = 'pages/menu-pages/dynamic/pages/public';
    const routePath = 'pages/menu-pages/dynamic/routes/public';

    // First, get all docs in collection and delete them
    // both in pages and routes
    const pageRef = collection(db, pagePath);
    const pagesSnap = await getDocs(pageRef);

    
    // Second, delete every document in firestore
    pagesSnap.forEach(
        async(dbDoc) => {
            if(dbDoc.id === 'index'){
                console.log('Skipping index')
            } else {
                await deleteDoc(doc(db, `${pagePath}/${dbDoc.id}`))
                await deleteDoc(doc(db, `${routePath}/${dbDoc.id}`))
            }

        }
    )

    // Third, fill collection with default documents

    // Get default documents
    const [pageData, routeData ] = await QueryCollectionData('pages/menu-pages/default/pages/public', 'pages/menu-pages/default/routes/public');

    console.log('Route data ', routeData);
    console.log('Page data ', pageData);

    pageData.forEach(
        async(dbDoc) => {
            await setDoc(doc(db, `${pagePath}/${dbDoc.pageName}`), {
                pageName: dbDoc.pageName,
                pageContent: dbDoc.pageContent
            });
        }
    )
    Object.entries(routeData).forEach(
        async(dbDoc) => {
            console.log('Route id ', dbDoc);
            await setDoc(doc(db, `${routePath}/${dbDoc[0]}`), {
                title: dbDoc[1].title,
                route: dbDoc[1].route,
                eventkey: dbDoc[1].eventkey,
            });
        }
    )
}


// DONT USE THIS FUNCTION
export function SetDefault()
{
    const curItem = PagesObject()[3];
    const docRef = doc(db, 'pages', 'menu-pages', 'default', 'pages', 'public', 'Sandwiches');
    setDoc(docRef, {
        pageName: curItem.pageName,
        pageContent: curItem.pageContent,
    })
}