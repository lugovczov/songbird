import React from 'react';
import './ImageItem.scss';

export const ImageItem = ({ imageSrc }) => {
  return <img className="image-item m-2 ml-3" src={imageSrc} />;
};
