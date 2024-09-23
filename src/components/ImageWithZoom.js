import React from 'react';
import ModalImage from 'react-modal-image';// 导入 react-modal-image

// 图片放大缩小组件,react-modal-image
const ImageWithZoom = ({ planDiagram, altText }) => {
  return (
    // 不能用h-1/2，会使网站底部有白边
    <div className="m-4">
      <ModalImage
        small={planDiagram} // 页面上显示的小图
        large={planDiagram} // 点击后放大的图片
        alt={altText} // 自定义 alt 属性
        className="w-full h-aotu object-contain cursor-pointer"
      />
    </div>
  );
};

export default ImageWithZoom;
