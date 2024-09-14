// src/components/ChinaMap.js

import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { china } from '../utils/map/china';  // 导入中国地图
import { useNavigate } from 'react-router-dom';

// 注册中国地图
echarts.registerMap('china', china, {});

const ChinaMap = () => {
  const navigate = useNavigate();

  const onChartClick = (params) => {
    // 通过路由跳转，并传递省份名称作为查询参数
    const provinceName = params.name;  // 获取点击的省份名称
    navigate(`/province?name=${provinceName}`);  // 跳转到 province 页面
  };

  const chinaMapOption = {
    series: [{
      type: 'map',
      map: 'china',
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
      option={chinaMapOption}
      onEvents={{ click: onChartClick }}  // 绑定点击事件
    />
  );
};

export default ChinaMap;
