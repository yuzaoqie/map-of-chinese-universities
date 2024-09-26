# 中国大学分布图 - 前端部分

## 项目简介
本项目是一个基于地图的中国大学分布展示网站，用户可以通过交互式地图查看中国各省的高校分布信息。该项目实现了前后端分离，前端使用 React 构建，并通过 RESTful API 与后端进行交互。

## 功能特点
- **交互式地图**：用户可以通过地图选择各省，查看省内本科和专科院校的分布情况。
- **悬停提示**：地图悬停时，实时显示该省的高校数量。
- **高校详细信息**：点击某省，可以进入该省高校的详细数据页面，展示高校的具体位置、类别和实力（985、211、双一流等）。

## 技术栈
- **前端框架**：React
- **样式**：Tailwind CSS
- **图表库**：ReactECharts, ECharts
- **地图交互**：结合 ECharts 和 react-modal-image 组件进行组件化开发，提升了代码的复用性和可维护性。
- **数据请求**：Axios，用于通过 RESTful API 与后端进行数据交互。

## 项目结构
```bash
university-distribution-frontend/
├── public/                # 静态资源文件夹
├── src/
│   ├── assets/            # 图片等资源文件夹
│   ├── components/        # 组件文件夹，包含复用的 UI 组件
│   ├── pages/             # 各页面文件夹
│   ├── services/          # Axios 请求文件夹，管理与后端 API 的交互
│   └── index.js           # 项目入口文件
└── tailwind.config.js     # Tailwind CSS 配置文件
```

## 安装与运行

### 前提条件
- Node.js 版本 >= 14
- NPM 

### 安装步骤

1. 克隆项目代码：
   ```bash
   git clone https://github.com/yuzaoqie/map-of-chinese-universities.git
   cd map-of-chinese-universities
   ```

2. 安装依赖：
   ```bash
   npm install 
   ```
   
3. 启动开发服务器：
   ```bash
   npm start
   ```
   
4. 打开浏览器访问 `http://localhost:3000` 查看效果。

## API 接口说明
前端通过 Axios 向后端 RESTful API 发起请求，获取高校分布及详情数据。具体 API 路径如下：

- **获取省份高校信息**：
  - `GET /api/provinces/:provinceName`：获取指定省份的高校分布信息。
- **获取高校详细信息**：
  - `GET /api/universities/:universityId`：获取指定高校的详细信息。
