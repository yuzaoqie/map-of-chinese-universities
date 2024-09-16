import { useSearchParams } from "react-router-dom";
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { useLocation } from 'react-router-dom';
import { provinces } from '../../assets/map/provinces';  // 导入所有省份的地图

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
    <div style={{ padding: '20px' }}>
      <h2>数据展示</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        
        <div style={{ flex: 2 }}>
          <ReactECharts
            style={{ height: '600px' }}
            option={provinceMapOption}
          />
        </div>
        
        {/* 右侧数据展示 */}
      <div className="w-1/3 pl-5"> {/* 右侧固定宽度为 1/3，内边距为 5 */}
        <h3 className="text-lg font-bold mb-2">{provinceName} 数据</h3>
        <p className="text-gray-700">这里展示 {provinceName} 的相关数据。</p>
        {/* 你可以在这里展示更多的数据 */}
      </div>
      
      </div>
    </div>
  );
};

export default ProvinceMap;
