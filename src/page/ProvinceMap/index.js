import { useSearchParams } from "react-router-dom";
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { provinces } from '../../assets/map/provinces';  // 导入所有省份的地图
import bgImage from '../../assets/images/bg06.png'; // 背景图片
import headerImage from '../../assets/images/header.png'; // 标题图片
import panelImage from '../../assets/images/panel.png'; // 边框图片
import '../../output.css'; // tailwindcss 样式
import UniversityTable from "../../components/UniversityTable"; // 院校表格
import TitleHeader from "../../components/TitleHeader"; // 标题组件
import BackgroundWrapper from "../../components/BackgroundWrapper"; // 背景组件
import Panel from "../../components/Panel"; // 右侧数据面板组件
import MapPanel from "../../components/MapPanel"; // 左侧地图面板组件
import NotFound from "../NotFound"; // 404 页面
import { useParams } from 'react-router-dom'; // 确保导入 useParams
import { provinceMapOption } from '../../config/provinceMapConfig'; // 导入省份地图配置

const ProvinceMap = () => {
  const { name: provinceName } = useParams();  // 从路由参数中获取省份名称

  // 从 provinces 中获取对应的地图数据
  const provinceMap = provinces[provinceName];

  // 打印 provinceName 和 provinceMap，检查是否找到了对应的地图数据
  console.log(provinceName, provinceMap);

  if (!provinceMap) {
    return <NotFound />;
  }

  // 注册省份地图
  echarts.registerMap(provinceName, provinceMap, {});

  return (
    <BackgroundWrapper bgImage={bgImage}>
      {/* 标题居中 */}
      <TitleHeader headerName={`${provinceName}高校分布情况`} headerImage={headerImage} />

      {/* 左右布局 */}
      <div class="flex m-4 min-h-screen">
        
        {/* 左侧数据展示*/}
        <MapPanel
          panelImage={panelImage}
          provinceMapOption={provinceMapOption(provinceName)}
          provinceName={provinceName}
        />
        
        {/* 右侧数据展示 */}
        <div className="ml-4 w-1/2 flex flex-col">
          {/* 本科院校 */}
          <Panel panelImage={panelImage} className="flex-1">
            {/* TODO 数据修改 */}
            <UniversityTable provinceName={provinceName} level="本科" />
          </Panel>
          {/* 专科院校 */}
          <Panel panelImage={panelImage} className="mt-4 flex-1">
            {/* TODO 数据修改 */}
            <UniversityTable provinceName={provinceName} level="专科" />
          </Panel>
        </div>
      </div>
    </BackgroundWrapper>
  );
  
};

export default ProvinceMap;
