import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 
const UniversityTable = ({ provinceName }) => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/universitiesByProvinceMap/${encodeURIComponent(provinceName)}`);
        setUniversities(response.data);
      } catch (error) {
        console.error('Error fetching universities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [provinceName]);

  // 点击表格行时，跳转到对应的大学详情页
  const handleRowClick = (universityName) => {
    const url = `/universityInfo/${encodeURIComponent(universityName)}`;

    window.open(url, '_blank'); // 在新标签页中打开
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto p-4">
      <table className="border border-lineTable-blue min-w-full table-auto">
        <thead>
          <tr className="bg-bgTable-blue">
            <th className="table-text">序号</th>
            <th className="table-text">本科院校名称</th>
            <th className="table-text">类型</th>
            <th className="table-text">办学层次</th>
            <th className="table-text">类别</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, index) => (
            <tr key={university.id} className="text-center" onClick={() => handleRowClick(university.name)}>
              <td className="table-text">{index + 1}</td>
              <td className="table-text">{university.name}</td>
              <td className="table-text">{university.public_private}</td>
              <td className="table-text">{university.type}</td>
              <td className="table-text">{university.discipline_category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UniversityTable;
