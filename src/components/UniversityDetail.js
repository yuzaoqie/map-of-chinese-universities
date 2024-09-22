import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 导入 Axios
import Panel from '../components/Panel';
import panelImage from '../assets/images/panel.png';
import InfoItem from '../components/InfoItem';
import NotFound from "../page/NotFound";

const UniversityDetail = ({ universityName }) => {
    const [university, setUniversity] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <p>Loading...</p>;
    if (!university) return <NotFound />;

    return (
        <div className="flex m-4 min-h-screen">
            {/* 大学具体信息:左侧面板 */}
            <Panel panelImage={panelImage} className="w-1/2 mr-2">
                <div className="relative m-4">
                    <img src={university.background_image_path} alt="bg" />
                    <img 
                        src={university.logo_path} 
                        className="absolute top-0 left-0 m-4" 
                        alt="logo"
                    />
                </div>
                <div>
                    <p className="m-4 text-textTable-white" style={{ textIndent: '2em' }}>
                        {university.description}
                    </p>
                </div>
            </Panel>

            {/* 大学具体信息:右侧面板 */}
            <Panel panelImage={panelImage} className="w-1/2 ml-2">
                <InfoItem h3Text="学校名称：" pText={university.name} />
                <InfoItem h3Text="校训：" pText={university.motto} />
                <InfoItem h3Text="学校发展历史：" pText={university.history} />
                <InfoItem h3Text="校区地址：" pText={university.address} />
                <InfoItem h3Text="官网：" pText={<a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a>} />
                <InfoItem h3Text="招生办：" pText={<a href={university.enrollment_website} target="_blank" rel="noopener noreferrer">{university.enrollment_website}</a>} />
            </Panel>
        </div>
    );
};

export default UniversityDetail;
