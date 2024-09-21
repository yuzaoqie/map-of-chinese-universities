import React from 'react';
import '../output.css';
import { useLocation } from 'react-router-dom';

// 测试用的数据，未来将会从后端获取
const UniversityTable = () => {
    const data = [
      // 985,211,双一流,本科
      { id: 1, name: '上海应用技术大学', type: '地方公办', level: '本科', link: 'https://adm.sit.edu.cn/', Category:'理工'},
      { id: 2, name: '华东理工大学', type: '教育部直属', level: '211', link: 'https://zsb.ecust.edu.cn/', Category:'理工'},
      { id: 3, name: '上海交通大学', type: '教育部直属', level: '985', link: 'https://zsb.sjtu.edu.cn/web/jdzsb/3810001.htm', Category:'综合'},
    ];

    const handleRowClick = (universityName) => {
      const url = `/universityInfo/${encodeURIComponent(universityName)}`;

      window.open(url, '_blank'); // 在新标签页中打开
  };


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
            <th className="table-text">办学层次</th>
            <th className="table-text">类别</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="text-center" onClick={() => handleRowClick(row.name)}>
              <td className="table-text">{row.id}</td>
              <td className="table-text">{row.name}</td>
              <td className="table-text">{row.type}</td>
              <td className="table-text">{row.level}</td>
              <td className="table-text">{row.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default UniversityTable;