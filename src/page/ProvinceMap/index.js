import { useSearchParams } from "react-router-dom";
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { useLocation } from 'react-router-dom';
import { provinces } from '../../utils/map/provinces';  // 导入所有省份的地图

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
    <ReactECharts
      style={{ height: '600px' }}
      option={provinceMapOption}
    />
  );
};

export default ProvinceMap;