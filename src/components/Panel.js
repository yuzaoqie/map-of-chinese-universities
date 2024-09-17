import React from 'react';

function Panel({ panelImage, className, children }) {
  return (
    <div 
      className={`bg-cover bg-center ${className}`} // 使用传入的 className
      style={{
        backgroundImage: `url(${panelImage})`, // 背景图片
        backgroundSize: '100% 100%', // 背景图片随容器变化
      }}
    >
      {children}  {/* 显示嵌套的子组件或内容 */}
    </div>
  );
}

export default Panel;
