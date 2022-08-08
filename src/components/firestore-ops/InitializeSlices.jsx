import { GetDefaultMenuPages, GetMainPages } from '../firestore-ops/MainQueries';

import { useSelector, useDispatch } from "react-redux";
import { updatePages, updateRoutes } from '../../redux-store/slices/menuPagesSlice';
import { updateMainRoutes } from '../../redux-store/slices/mainPagesSlice';


export default async function InitializeSlices()
{
    const dispatch = useDispatch();
    const result = await Promise.all([GetDefaultMenuPages(), GetMainPages()]);

    const menuPages = result[0];
    const mainPages = result[1];

    dispatch(updatePages(menuPages[0]));
    dispatch(updateRoutes(menuPages[1]));
    
    dispatch(updateMainRoutes(mainPages));
}


// export async function InitializeMenuPages()
// {
//     await GetDefaultMenuPages().then(
//         (item) => {
//             dispatch(updatePages(item[0]));
//             dispatch(updateRoutes(item[1]));
//         }
//     );
// }

// export async function InitializeMainPages()
// {
//     await GetMainPages().then(
//         (item) => {
//             dispatch(updateMainRoutes(item))
//         }
//     )
// }