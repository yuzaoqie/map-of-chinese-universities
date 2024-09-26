// 中国地图配置，优化代码结构，将配置项提取到单独的文件中
export const generateChinaMapOption = (universityData) => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        // if (params.data && params.data.tooltip) {
        //   return params.data.tooltip.formatter; // 显示tooltip中的formatter
        // } else {
        //   return params.name; // 默认显示名称
        // }
        const { name } = params; // 获取地区名称
        const universityCount = universityData[name] || 0; // 从 universityData 中获取高校数量，默认为 0
        return `${name}<br/>高校数量: ${universityCount}`;
      },
      backgroundColor: 'rgba(50, 50, 50, 0.8)', // 提示框背景色
      textStyle: {
        color: '#FFFFFF', // 提示框文字颜色
      },
    },
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
        // 启用缩放和平移
        roam: true,
        // // 添加标记点
        // markPoint: {
        //   symbol: 'pin',  // 标记的形状，可以使用其他形状如 'circle'
        //   symbolSize: [40, 40],  // 调整标记点的宽度和高度
        //   label: {
        //     show: true,
        //     formatter: '{b}', // 显示城市名称
        //     color: '#FFFFFF', // 文字颜色
        //   },
        //   data: [
        //     { name: '92', coord: [116.46, 39.92], tooltip: { formatter: '北京<br/>全市本科院校数量：<br/>专科院校数量：' } },  // 北京的经纬度
        //     { name: '31', coord: [121.48, 31.22], tooltip: { formatter: '上海<br/>全市本科院校数量：<br/>专科院校数量：' } },  // 上海的经纬度
        //     { name: '44', coord: [113.23, 23.16], tooltip: { formatter: '广州<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 广州的经纬度
        //     { name: '11', coord: [116.41, 39.91], tooltip: { formatter: '天津<br/>全市本科院校数量：<br/>专科院校数量：' } },  // 天津的经纬度
        //     { name: '50', coord: [106.54, 29.59], tooltip: { formatter: '重庆<br/>全市本科院校数量：<br/>专科院校数量：' } },  // 重庆的经纬度
        //     { name: '13', coord: [114.48, 38.03], tooltip: { formatter: '石家庄<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 石家庄的经纬度
        //     { name: '15', coord: [111.65, 40.82], tooltip: { formatter: '呼和浩特<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 呼和浩特的经纬度
        //     { name: '21', coord: [123.38, 41.8], tooltip: { formatter: '沈阳<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 沈阳的经纬度
        //     { name: '22', coord: [125.35, 43.88], tooltip: { formatter: '长春<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 长春的经纬度
        //     { name: '23', coord: [126.63, 45.75], tooltip: { formatter: '哈尔滨<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 哈尔滨的经纬度
        //     { name: '32', coord: [118.78, 32.04], tooltip: { formatter: '南京<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 南京的经纬度
        //     { name: '33', coord: [120.19, 30.26], tooltip: { formatter: '杭州<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 杭州的经纬度
        //     { name: '34', coord: [117.27, 31.86], tooltip: { formatter: '合肥<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 合肥的经纬度
        //     { name: '35', coord: [118.1, 24.46], tooltip: { formatter: '福州<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 福州的经纬度
        //     { name: '36', coord: [117.0, 36.65], tooltip: { formatter: '济南<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 济南的经纬度
        //     { name: '37', coord: [117.0, 36.65], tooltip: { formatter: '济南<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 济南的经纬度
        //     { name: '41', coord: [113.65, 34.76], tooltip: { formatter: '郑州<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 郑州的经纬度
        //     { name: '42', coord: [114.31, 30.52], tooltip: { formatter: '武汉<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 武汉的经纬度
        //     { name: '43', coord: [112.98, 28.21], tooltip: { formatter: '长沙<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 长沙的经纬度
        //     { name: '45', coord: [108.33, 22.84], tooltip: { formatter: '南宁<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 南宁的经纬度
        //     { name: '46', coord: [110.35, 20.02], tooltip: { formatter: '海口<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 海口的经纬度
        //     { name: '51', coord: [104.06, 30.67], tooltip: { formatter: '成都<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 成都的经纬度
        //     { name: '52', coord: [106.71, 26.57], tooltip: { formatter: '贵阳<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 贵阳的经纬度
        //     { name: '53', coord: [102.73, 25.04], tooltip: { formatter: '昆明<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 昆明的经纬度
        //     { name: '54', coord: [91.11, 29.97], tooltip: { formatter: '拉萨<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 拉萨的经纬度
        //     { name: '61', coord: [108.95, 34.27], tooltip: { formatter: '西安<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 西安的经纬度
        //     { name: '62', coord: [103.82, 36.06], tooltip: { formatter: '兰州<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 兰州的经纬度
        //     { name: '63', coord: [101.72, 36.56], tooltip: { formatter: '西宁<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 西宁的经纬度
        //     { name: '64', coord: [106.27, 38.47], tooltip: { formatter: '银川<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 银川的经纬度
        //     { name: '65', coord: [87.68, 43.77], tooltip: { formatter: '乌鲁木齐<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 乌鲁木齐的经纬度
        //     { name: '71', coord: [121.5, 25.05], tooltip: { formatter: '台北<br/>全省本科院校数量：<br/>专科院校数量：' } },  // 台北的经纬度
        //     { name: '81', coord: [114.17, 22.28], tooltip: { formatter: '澳门<br/>全区本科院校数量：<br/>专科院校数量：' } },  // 澳门的经纬度
        //     { name: '82', coord: [113.55, 22.15], tooltip: { formatter: '香港<br/>全区本科院校数量：<br/>专科院校数量：' } },  // 香港的经纬度
        //   ],
        // },
    }],
  };
};
