import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [isShow, setIsShow] = useState(true)

    const onToggle = () => {
        setIsShow(!isShow)
    }


    return (
        <div>
            <h2>useEffect 형식4</h2>
            <p>
                <button onClick={onToggle}>
                    {
                        isShow ? '숨기기':'보이기'
                    }
                </button>
            </p>
            {
                isShow && <Test3Sub />
            }
            
        </div>
    );
};

export default Test3;