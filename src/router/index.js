import ChinaMap from "../page/ChinaMap"; // 中国地图页面
import Province from "../page/ProvinceMap"; // 省份地图页面
import NotFound from "../page/NotFound"; // 404 页面
import UniversityInfo from "../page/UniversityInfo"; // 院校信息页面
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
        path: '/universityInfo',
        element: <UniversityInfo />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;