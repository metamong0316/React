import React, { useState } from 'react';

const Test3 = () => {
    const [count, setCount] = useState(0)
    const onUp = () => {
        setCount(count + 1)
    }
    const onDown = () => {
        setCount(count - 1)
    }
    const onReset = () => {
        setCount(0)
    }


    return (
        <>
            <h1> 카운트 : {count}</h1>
            <p>
                <button onClick={onUp}>증가</button>
                <button onClick={onDown}>감소</button>
                <button onClick={onReset}>초기화</button>
            </p>
        </>
    );
};

export default Test3;