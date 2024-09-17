import React from 'react';

// 定义复用的背景包装组件
function BackgroundWrapper({ bgImage, children }) {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {children} {/* 子元素内容: 占位符 */}
    </div>
  );
}

export default BackgroundWrapper;
