import React from 'react';

// 可复用的标题组件
function TitleHeader({ Name, headerImage }) {
  return (
    <h1 
      className="text-sky-300 text-center text-2xl font-bold uppercase py-2.5 px-6"
      style={{ 
        backgroundImage: `url(${headerImage})`,
        height: '65px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {Name}高校分布情况
    </h1>
  );
}

export default TitleHeader;
