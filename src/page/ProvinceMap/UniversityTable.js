import React from 'react';
import '../../output.css'; // 更新路径

// 测试用的数据，未来将会从后端获取
const UniversityTable = () => {
    const data = [
      { id: 1, name: '上海应用技术大学', type: '公办', link: 'https://adm.sit.edu.cn/'},
      { id: 2, name: '华东理工大学', type: '公办', link: 'https://zsb.ecust.edu.cn/'},
      { id: 3, name: '上海交通大学', type: '公办', link: 'https://zsb.sjtu.edu.cn/web/jdzsb/3810001.htm'},
    ];

  return (
    <div className="overflow-x-auto p-4 ">
      <table className="border border-lineTable-blue min-w-full table-auto">
        <thead>
          <tr className="bg-bgTable-blue">
            {/* 在iput.css复用了table-text，详细参考tailwind复用 */}
            <th className="table-text">序号</th>
            {/* {本科，专科} */}
            <th className="table-text">本科院校名称</th>
            <th className="table-text">类型</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="table-text">{row.id}</td>
              <td 
                className="table-text">
                <a href={row.link} target="_blank" className="block">{row.name}</a>
              </td>
              <td className="table-text">{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};
  export default UniversityTable;