import React, { useState } from 'react';

const Test12 = () => {

    const [check, setCheck] = useState(false)
    const onChk = (e) => {
        const { checked } = e.target
        setCheck(checked)
    }

    return (
        <>
            <div style={{color:check? 'tomato': 'blue', margin:30, fontSize:20, fontWeight:'bold'}}>
                <input type="checkbox" onChange={onChk} checked={check} />
                오늘은 일요일 입니다    
            </div>   
        </>
    );
};

export default Test12;