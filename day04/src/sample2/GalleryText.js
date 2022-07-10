import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryText = ({cat}) => {
    const {title, des} = cat
    return (
        <div className="text">
            <strong>{title}</strong>
            <p>{des}</p>
        </div>
    );
};

export default GalleryText;