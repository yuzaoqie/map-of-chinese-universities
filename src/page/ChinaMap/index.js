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

  const onChartClick = (params) => {
    const provinceName = params.name;  // 获取点击的省份名称
    console.log(provinceName); // 打印省份名称以确认
    const url = `/provinceMap/${encodeURIComponent(provinceName)}`;
    
    // 在新标签页中打开 province 页面
    window.open(url, '_blank');
  };

  const chinaMapOption = {
    series: [{
      type: 'map',
      map: 'china',
      label: {
        show: true,  // 显示省份名称
        color: '#FFFFFF',  // 设置文字颜色
        fontSize: 14,   // 设置文字大小
      },
      itemStyle: {
        normal: {
          areaColor: '#00467f',  // 设置省份区域的默认颜色
          borderColor: '#FFFFFF',   // 设置省份边界的颜色
        },
        emphasis: {
          areaColor: '#01beff',  // 设置鼠标悬浮时区域的颜色
        },
      },
    }],
  };

  return (
    <BackgroundWrapper bgImage={bgImage}>
      {/* 标题居中 */}
      <TitleHeader headerName="全国高校分布" headerImage={headerImage} />

      {/* 地图展示 */}
      <ReactECharts
        style={{ height: '1200px' }}
        option={chinaMapOption}
        onEvents={{ click: onChartClick }}  // 绑定点击事件
      />
    </BackgroundWrapper>
  );
};

export default ChinaMap;