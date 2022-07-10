import React from 'react';

const GalleryItem = ({item, onView}) => {
    const { id, imgurl, title } = item
    return (
        <li onClick={() => onView( id )}>
            <img src={imgurl} arl={title} />
        </li>
    );
};

export default GalleryItem;