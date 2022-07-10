import React, { useEffect, useState } from 'react';

const Test7Sub = () => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        console.log('시작')
        const timer = setInterval(() => {
            setNow(new Date())
        }, 1000);

        return() => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <h2>날짜 : {now.toLocaleDateString()}</h2>
            <h2>시간 : {now.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Test7Sub;