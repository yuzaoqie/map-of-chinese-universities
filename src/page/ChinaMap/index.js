import React, { useState, useEffect } from 'react'; // 导入 useState 和 useEffect
import axios from 'axios'; // 导入 axios
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { china } from '../../assets/map/china';  // 导入中国地图
import { useNavigate, createSearchParams } from 'react-router-dom';
import bgImage from '../../assets/images/bg01.png'; // 更新路径
import headerImage from '../../assets/images/header.png'; // 更新路径
import TitleHeader from '../../components/TitleHeader';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import { generateChinaMapOption } from '../../config/chinaMapConfig'; // 导入中国地图配置
import Top10ProvincesChart from '../../components/Top10ProvincesChart'; // 导入 Top10ProvincesChart 组件

// 注册中国地图
echarts.registerMap('china', china, {});

const ChinaMap = () => {

  const [universityData, setUniversityData] = useState({});

  // 获取大学数量的 API 数据
  useEffect(() => {
    axios.get('http://localhost:8080/api/universityCount')
      .then(response => {
        const data = response.data;
        // 将数据转换为 { 省份名称: 大学数量 } 格式
        const formattedData = data.reduce((acc, item) => {
          acc[item.province_name] = item.university_count;
          return acc;
        }, {});
        setUniversityData(formattedData); // 存储到 state 中
      })
      .catch(error => {
        console.error("Error fetching university data:", error);
      });
  }, []);

  const onChartClick = (params) => {
    const provinceName = params.name;  // 获取点击的省份名称
    console.log(provinceName); // 打印省份名称以确认
    const url = `/provinceMap/${encodeURIComponent(provinceName)}`;
    
    // 在新标签页中打开 province 页面
    window.open(url, '_blank');
  };

  // 动态生成地图配置
  const chinaMapOption = generateChinaMapOption(universityData);

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