import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { china } from '../../assets/map/china';  // 导入中国地图
import { useNavigate, createSearchParams } from 'react-router-dom';
import bgImage from '../../assets/images/bg01.png'; // 更新路径
import headerImage from '../../assets/images/header.png'; // 更新路径
import TitleHeader from '../../components/TitleHeader';
import BackgroundWrapper from '../../components/BackgroundWrapper';

// 注册中国地图
echarts.registerMap('china', china, {});

const ChinaMap = () => {
  const navigate = useNavigate();

  const onChartClick = (params) => {
    const provinceName = params.name;  // 获取点击的省份名称
    const url = `/provinceMap?name=${encodeURIComponent(provinceName)}`;
    
    // 在新标签页中打开 province 页面
    window.open(url, '_blank');
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
    <BackgroundWrapper bgImage={bgImage}>
      {/* 标题居中 */}
      <TitleHeader Name="全国" headerImage={headerImage} />

      <ReactECharts
        style={{ height: '600px' }}
        option={chinaMapOption}
        onEvents={{ click: onChartClick }}  // 绑定点击事件
      />
    </BackgroundWrapper>
  );
};

export default ChinaMap;