import React from 'react';

const BusinessItem = ({item}) => {
    const {imgurl , title, titleEng, des } = item
    return (
        <li>
            <a href="#">
                <div><img src={imgurl} alt="" /></div>
                <h3>
                    {title}
                    <span> {titleEng}</span></h3>
                <p>{des}</p>
            </a>
        </li>
    );
};

export default BusinessItem;