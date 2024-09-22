import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JuniorCollegeTable = ({ provinceName }) => {
  const [juniorColleges, setJuniorColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJuniorColleges = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/juniorCollegesByProvinceMap/${encodeURIComponent(provinceName)}`);
        setJuniorColleges(response.data);
      } catch (error) {
        console.error('Error fetching juniorColleges:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJuniorColleges();
  }, [provinceName]);

  if (loading) return <p>Loading...</p>;

  // 点击表格行时，跳转到对应的专科详情页
  const handleRowClick = (juniorCollegeName) => {

    const url = `/juniorCollegeInfo/${encodeURIComponent(juniorCollegeName)}`;

    window.open(url, '_blank'); // 在新标签页中打开
  };

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
          {juniorColleges.map((juniorCollege, index) => (
            <tr key={juniorCollege.id} className="text-center" onClick={() => handleRowClick(juniorCollege.name)}>
              <td className="table-text">{index + 1}</td>
              <td className="table-text">{juniorCollege.name}</td>
              <td className="table-text">{juniorCollege.public_private}</td>
              <td className="table-text">{juniorCollege.type}</td>
              <td className="table-text">{juniorCollege.discipline_category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JuniorCollegeTable;
