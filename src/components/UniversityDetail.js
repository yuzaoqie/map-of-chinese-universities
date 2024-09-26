import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 导入 Axios
import Panel from '../components/Panel';
import panelImage from '../assets/images/panel.png';
import InfoItem from '../components/InfoItem';
import NotFound from "../page/NotFound";
import ImageWithZoom from '../components/ImageWithZoom';


// 大学具体信息
const UniversityDetail = ({ universityName }) => {
    const [university, setUniversity] = useState(null);
    const [loading, setLoading] = useState(true);

    // 从后端获取大学具体信息
    useEffect(() => {
        const fetchUniversityDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/universities/${encodeURIComponent(universityName)}`);
                setUniversity(response.data);
            } catch (error) {
                console.error('Error fetching university details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversityDetails();
    }, [universityName]);

    // 如果正在加载，显示加载中
    if (loading) return <p>Loading...</p>;
    // 如果大学不存在，显示未找到
    if (!university) return <NotFound />;

    return (
        <div className="flex m-4 min-h-screen">
            {/* 大学具体信息:左侧面板 */}
            <Panel panelImage={panelImage} className="w-1/2 mr-2">
                <div className="relative m-4 h-1/2">
                    <img 
                        src={university.background_image_path} 
                        className='w-full h-full'
                        alt="学校背景图" 
                    />
                    <img 
                        src={university.logo_path} 
                        className="absolute top-0 left-0 m-4" 
                        alt="学校校徽"
                    />
                </div>
                <ImageWithZoom planDiagram={university.plan_diagram_path} altText="校园平面图" />
            </Panel>

            {/* 大学具体信息:右侧面板 */}
            <Panel panelImage={panelImage} className="w-1/2 ml-2">
                <InfoItem h3Text="学校名称：" pText={university.name} />
                <InfoItem h3Text="办学层次：" pText={university.type} />
                <InfoItem h3Text="公办/民办：" pText={university.public_private} />
                <InfoItem h3Text="学科类别：" pText={university.discipline_category} />
                <InfoItem h3Text="校区地址：" pText={university.address} />
                <InfoItem h3Text="校训：" pText={university.motto} />
                <InfoItem h3Text="师资力量：" pText={university.faculty_strength} />
                <InfoItem h3Text="科研实力：" pText={university.research_strength} />
                <InfoItem h3Text="硕士点、博士生点：" pText={university.graduate_points} />
                <InfoItem h3Text="知名校友：" pText={university.notable_alumni} />
                <InfoItem h3Text="校园活动与文化：" pText={university.campus_activities} />
                <InfoItem h3Text="学校发展历史：" pText={university.history} />
                <InfoItem h3Text="学校描述：" pText={university.description} />
                <InfoItem h3Text="联系电话：" pText={university.contact_phone} />
                <InfoItem h3Text="联系邮箱：" pText={university.contact_email} />
                <InfoItem h3Text="官网：" pText={<a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a>} />
                <InfoItem h3Text="招生办：" pText={<a href={university.enrollment_website} target="_blank" rel="noopener noreferrer">{university.enrollment_website}</a>} />
                {/* <InfoItem h3Text="软科：" pText={<a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a>} />
                <InfoItem h3Text="大学生活质量：" pText={<a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a>} />
                <InfoItem h3Text="框框大学：" pText={<a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a>} />
                <InfoItem h3Text="阳光高考：" pText={<a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a>} /> */}
            </Panel>
        </div>
    );
};

export default UniversityDetail;
