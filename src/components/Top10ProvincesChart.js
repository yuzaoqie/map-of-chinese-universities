import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Top10ProvincesChart = () => {
    const [chartData, setChartData] = useState({ provinces: [], counts: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTop10Provinces = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/top10Provinces');
                const provinces = response.data.map(item => item.province_name);
                const counts = response.data.map(item => item.count); // Ensure this matches your backend response
                
                setChartData({ provinces, counts });
            } catch (error) {
                console.error('Error fetching top 10 provinces:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTop10Provinces();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">院校总数TOP10的省份</h2>
            <div className="space-y-2">
                {chartData.provinces.map((province, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between w-full max-w-md p-4 border rounded-lg shadow-md"
                        style={{
                            border: '1px solid #4B8BBE',
                            borderRadius: '12px',
                            backgroundColor: '#F0F8FF',
                        }}
                    >
                        <span className="font-semibold">{province}</span>
                        <span className="text-lg">{chartData.counts[index]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Top10ProvincesChart;
