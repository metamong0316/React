import React, { useState } from 'react';

const Test11 = () => {
    
    const [bgColor, setBgColor] = useState('pink')
    
    const onColor = () => {
        //pink - blue 왕복
        setBgColor(bgColor === 'pink' ? 'blue' : 'pink')
    }

    return (
        <>
            <h2>h1을 클릭하면 pink - blue 글자 변경 왕복</h2>
            <h1 style={{
                padding:10, border: '1px solid #333', 
                margin:20, fontSize:30, backgroundColor:bgColor, cursor:'pointer'}} onClick={onColor}>
                background: {bgColor}
            </h1>
        </>
    );
};

export default Test11;