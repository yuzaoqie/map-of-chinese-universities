// 配置省级地图的配置项
export const provinceMapOption = (provinceName) => {
    return {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                const { name } = params; // 获取地区名称
                // const data = universityData[name]; // 根据地区名称获取高校数量

                // if (data) {
                //     // 如果有该地区的数据，显示高校数量
                //     return `${name}<br/>高校数量: ${data.universityCount}`;
                // } else {
                //     // 如果没有数据，显示地区名称
                //     return `${name}`;
                // }
                return `${name}<br/>高校数量: 0`; 
            },
            backgroundColor: 'rgba(50, 50, 50, 0.8)', // 提示框背景色
            textStyle: {
                color: '#FFFFFF', // 提示框文字颜色
            },
        },
        series: [{
            type: 'map',
            map: provinceName,
            label: {
                show: true,  // 显示地区名称
                color: '#FFFFFF',  // 设置文字颜色
                fontSize: 12,   // 设置文字大小
                
            },
            itemStyle: {
                normal: {
                    areaColor: '#00467f',  // 设置区域的默认颜色
                    borderColor: '#FFFFFF',   // 设置边界的颜色
                },
                emphasis: {
                    areaColor: '#01beff',  // 设置鼠标悬浮时区域的颜色
                },
            },
            // 启用缩放和平移
            roam: true,
        }],
    };
};