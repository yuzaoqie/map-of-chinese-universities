// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChinaMap from './components/ChinaMap';
import ProvinceMap from './components/ProvinceMap';  // 动态加载省份地图的组件

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChinaMap />} />  {/* 显示中国地图 */}
        <Route path="/province" element={<ProvinceMap />} />  {/* 根据查询参数显示省份地图 */}
      </Routes>
    </Router>
  );
}

export default App;
