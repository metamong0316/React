import React, { useState } from 'react';

const Test13 = () => {

    const [isChk, setIsChk] = useState(false)

    const onView = (e) => {
        const {checked} = e.target
        setIsChk(checked)
    }

    return (
        <div style={{margin:30}}>
            <p>
                <input type="checkbox" onChange= {onView} checked={isChk} />
                {
                    !isChk ? '보이기' : '숨기기'
                }
            </p>

            {
                !isChk ? '' : <div style={{width: 200, height: 100, background: 'pink'}}></div>
            }
            
        </div>
    );
};

export default Test13;