import { db } from '../../Firebase/firestore-cloud';
import { doc, collection, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { PagesObject } from '../../pages/Menus/Default/MenuDesignOne/MenuPagesData/MenuPagesData';

export function GetMainPages() 
{
    const [response, setResponse] = useState({});
    useEffect(() => {
        ;(async() => {
            const docRef = doc(db, 'pages/main-pages');
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();
            setResponse(data);
        })()
      }, []);
    return response;
}


export function GetDefaultMenuPages()
{
    const [pages, setPages] = useState([]);
    const [routes, setRoutes] = useState([]);
    useEffect(() => {
        ;(async() => {
            // Temp data holders
            const pageData = {};
            const routeData = {};

            // Firestore references
            const pageDocRef = collection(db, 'pages', 'menu-pages', 'default', 'pages', 'public');
            const routeDocRef = collection(db, 'pages', 'menu-pages', 'default', 'routes', 'public');

            // Data collectors
            const pagesDocSnap = await getDocs(pageDocRef);
            const routesDocSnap = await getDocs(routeDocRef);

            pagesDocSnap.forEach(
                doc => {
                    pageData[doc.id] = doc.data()
                }
            )
            routesDocSnap.forEach(
                doc => {
                    routeData[doc.id] = doc.data()
                }
            )
            setPages(pageData);
            setRoutes(routeData);
        })()
    }, [])
    return [pages, routes];
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