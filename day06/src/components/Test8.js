import React, { useEffect, useState } from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    const [msg, setMsg] = useState('test');
    const [isShow, setIsShow] = useState(false)

    const onMsg1 = () => {
        const result = window.confirm('전부 삭제?')
        if(result){
            setMsg('예')
            setIsShow(false)
            
        } else {
            return
        }
    }
    const onMsg2 = () => {
        const result = window.confirm('복구?')
        if(result){
            setMsg('예')
            setIsShow(true)
        } else {
            return
        }
    }

    return (
        <div>
            <p>
                <button onClick={onMsg1}>메세지</button>
                <button onClick={onMsg2}>메세지</button>
            </p>

            <hr />

            <Test8Sub msg={msg} isShow={isShow} setIsShow={setIsShow} />
        </div>
    );
};

export default Test8;