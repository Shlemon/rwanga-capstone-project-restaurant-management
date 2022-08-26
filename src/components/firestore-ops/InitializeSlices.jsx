import { GetDynamicMenuPages, GetMainPages, GetDynamicHomePages } from '../firestore-ops/MainQueries';

import { useDispatch } from "react-redux";
import { updatePages, updateRoutes } from '../../redux-store/slices/menuPagesSlice';
import { updateMainRoutes } from '../../redux-store/slices/mainPagesSlice';
import { updateHomepages } from '../../redux-store/slices/homepageSlice';


export default async function InitializeSlices()
{
    const dispatch = useDispatch();
    const result = await Promise.all([GetDynamicMenuPages(), GetMainPages(), GetDynamicHomePages()]);

    const data = {
        menuPages: result[0],
        mainPages: result[1],
        homePages: result[2],
    }

    dispatch(updatePages(data.menuPages[0]));
    dispatch(updateRoutes(data.menuPages[1]));
    
    dispatch(updateMainRoutes(data.mainPages));

    dispatch(updateHomepages(data.homePages));
}