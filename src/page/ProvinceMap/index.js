import { useSearchParams } from "react-router-dom";
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { useLocation } from 'react-router-dom';
import { provinces } from '../../assets/map/provinces';  // 导入所有省份的地图
import bgImage from '../../assets/images/bg06.png'; // 更新路径
import headerImage from '../../assets/images/header.png'; // 更新路径
import panelImage from '../../assets/images/panel.png'; // 更新路径
import '../../output.css'; // 更新路径
import UniversityTable from "./UniversityTable";

// 获取查询参数
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProvinceMap = () => {
  const query = useQuery();
  const provinceName = query.get('name');  // 获取URL中的省份名称

  // 从 provinces 中获取对应的地图数据
  const provinceMap = provinces[provinceName];

  // 打印 provinceName 和 provinceMap，检查是否找到了对应的地图数据
  console.log(provinceName, provinceMap);

  if (!provinceMap) {
    return <div>省份地图数据未找到。</div>;
  }

  // 注册省份地图
  echarts.registerMap(provinceName, provinceMap, {});

  const provinceMapOption = {
    series: [{
      type: 'map',
      map: provinceName,
      emphasis: {
        itemStyle: {
          areaColor: '#FF8C00',
        },
      },
    }],
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // 防止图片重复
        backgroundAttachment: 'fixed', // 背景图片固定
      }}
      
    >
      {/* 标题居中 */}
      <h1 
        className="text-sky-300 text-center text-2xl font-bold uppercase py-2.5 px-6 "
        style={{ 
          backgroundImage: `url(${headerImage})`,
          height: '65px',
          backgroundSize: 'cover', // 背景图像覆盖整个标题
          backgroundPosition: 'center', // 背景图像居中显示
      }}
      >
        {provinceName}高校分布情况
      </h1>

      {/* 左右布局 */}
      <div class="flex mt-4 min-h-screen">
        
        {/* 左侧数据展示 左右有间隔：mx-4 */}
        <div className="w-1/2 flex flex-col mx-4">
          <div 
            className="flex-1"
            style={{
              backgroundImage: `url(${panelImage})`, // 设置背景图片
              backgroundSize: '100% 100%', // 背景图片随着容器大小变化backgroundSize: '100% 100%',
            }}
          >
            {/* 放置地图 */}
            <ReactECharts 
              style={{
                width: '900px', // 设置宽度为 800 像素
                height: '600px', // 设置高度为 600 像素
                backgroundColor: 'transparent', // 设置背景颜色为透明
              }}
              option={provinceMapOption}
            />
            {/* 放置数据 */}
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{provinceName} 数据</h3>
              <p className="text-gray-700">这里展示 {provinceName} 的相关数据。</p>
            </div>
          </div>

          {/* 左下
          <div
            className="mt-2 h-1/2"
            style={{
              backgroundImage: `url(${panelImage})`, // 设置背景图片
              backgroundSize: '100% 100%', // 背景图片随着容器大小变化backgroundSize: '100% 100%',
            }}
          >
            dx
          </div> */}
          
        </div>

        {/* 右侧数据展示 */}
        <div
          className="w-1/2 flex flex-col"
        >
          {/* 本科院校 */}
          <div 
            className="flex-1 bg-cover bg-center"
            style={{
              backgroundImage: `url(${panelImage})`, // 设置背景图片
              backgroundSize: '100% 100%', // 背景图片随着容器大小变化backgroundSize: '100% 100%',
            }}
            >
            {/* TODO 数据修改 */}
            <UniversityTable />
          </div>
          {/* 专科院校 */}
          <div 
            className="mt-2 flex-1 bg-cover bg-center"
            style={{
              backgroundImage: `url(${panelImage})`, // 设置背景图片
              backgroundSize: '100% 100%', // 背景图片随着容器大小变化backgroundSize: '100% 100%',
            }}
            >
            <h3 className="text-lg font-bold mb-2">{provinceName} 表格数据2</h3>
            <p className="text-gray-700">这里展示 {provinceName} 的相关数据。</p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ProvinceMap;
