// From Firebase/Firestore/Storage
import { GetDynamicMenuPages, GetMainPages, GetDynamicHomePages } from '../firestore-ops/MainQueries';
// From Redux
import { useDispatch } from "react-redux";
// Slices
import { updatePages, updateRoutes } from '../../redux-store/slices/menuPagesSlice';
import { updateMainRoutes } from '../../redux-store/slices/mainPagesSlice';
import { updateHomepages } from '../../redux-store/slices/homepageSlice';


export default async function InitializeSlices()
{
    const dispatch = useDispatch();
    await Promise.all([GetDynamicMenuPages(), GetMainPages(), GetDynamicHomePages()])
    .then((result) => {
        
        dispatch(updatePages(result[0][0]));
        dispatch(updateRoutes(result[0][1]));
        dispatch(updateMainRoutes(result[1]));
        dispatch(updateHomepages(result[2]));
    });
}