// src/components/MapPanel.js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const MapPanel = ({ panelImage, provinceMapOption, provinceName }) => {
  return (
    // 左侧数据展示 左右有间隔：mx-4
    <div className="w-1/2 flex flex-col">
      <div
        className="flex-1"
        style={{
          backgroundImage: `url(${panelImage})`, // 设置背景图片
          backgroundSize: '100% 100%', // 背景图片随着容器大小变化
        }}
      >
        {/* 放置地图 */}
        <ReactECharts
          style={{
            width: '900px', // 设置宽度
            height: '600px', // 设置高度
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
    </div>
  );
};

export default MapPanel;
