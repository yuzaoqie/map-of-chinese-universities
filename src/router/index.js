import ChinaMap from "../page/ChinaMap";
import Province from "../page/ProvinceMap";
import NotFound from "../page/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <ChinaMap />
    },
    {
        path: "/provinceMap",
        element: <Province />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;