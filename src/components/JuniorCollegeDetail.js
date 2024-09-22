import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 导入 Axios
import Panel from '../components/Panel';
import panelImage from '../assets/images/panel.png';
import InfoItem from '../components/InfoItem';
import NotFound from "../page/NotFound";

// 专科院校具体信息
const JuniorCollegeDetail = ({ juniorCollegeName }) => {  
    const [juniorCollege, setJuniorCollege] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJuniorCollegeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/juniorColleges/${encodeURIComponent(juniorCollegeName)}`);
                setJuniorCollege(response.data);
            } catch (error) {
                console.error('Error fetching juniorCollege details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJuniorCollegeDetails();
    }, [juniorCollegeName]);

    if (loading) return <p>Loading...</p>;
    if (!juniorCollege) return <NotFound />;

    return (
        <div className="flex m-4 min-h-screen">
            {/* 大学具体信息:左侧面板 */}
            <Panel panelImage={panelImage} className="w-1/2 mr-2">
                <div className="relative m-4">
                    <img src={juniorCollege.background_image_path} alt="bg" />
                    <img 
                        src={juniorCollege.logo_path} 
                        className="absolute top-0 left-0 m-4" 
                        alt="logo"
                    />
                </div>
                <div>
                    <p className="m-4 text-textTable-white" style={{ textIndent: '2em' }}>
                        {juniorCollege.description}
                    </p>
                </div>
            </Panel>

            {/* 大学具体信息:右侧面板 */}
            <Panel panelImage={panelImage} className="w-1/2 ml-2">
                <InfoItem h3Text="学校名称：" pText={juniorCollege.name} />
                <InfoItem h3Text="校训：" pText={juniorCollege.motto} />
                <InfoItem h3Text="学校发展历史：" pText={juniorCollege.history} />
                <InfoItem h3Text="校区地址：" pText={juniorCollege.address} />
                <InfoItem h3Text="官网：" pText={<a href={juniorCollege.website} target="_blank" rel="noopener noreferrer">{juniorCollege.website}</a>} />
                <InfoItem h3Text="招生办：" pText={<a href={juniorCollege.enrollment_website} target="_blank" rel="noopener noreferrer">{juniorCollege.enrollment_website}</a>} />
            </Panel>
        </div>
    );
};

export default JuniorCollegeDetail;
