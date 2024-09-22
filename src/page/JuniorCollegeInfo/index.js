import React from 'react';
import '../../output.css'; // tailwindcss 样式
import BackgroundWrapper from "../../components/BackgroundWrapper"; // 背景组件
import TitleHeader from "../../components/TitleHeader"; // 标题组件
import bgImage from '../../assets/images/bg06.png'; // 背景图片
import headerImage from '../../assets/images/header.png'; // 标题图片
import { useParams } from 'react-router-dom'; // 确保导入 useParams
import JuniorCollegeDetail from '../../components/JuniorCollegeDetail'; // 专科院校具体信息实现


// 院校信息页面

const JuniorCollegeInfo = () => {
    const { name: juniorCollegeName } = useParams();  // 从路由参数中获取大学名称

    return (
        <BackgroundWrapper bgImage={bgImage}>
            {/* 标题居中 */}
            <TitleHeader headerName={`${juniorCollegeName}`} headerImage={headerImage} />

            {/* 院校具体信息 */}
            <JuniorCollegeDetail juniorCollegeName={juniorCollegeName} />            
        </BackgroundWrapper>
    );
};

export default JuniorCollegeInfo;