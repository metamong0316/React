import React, { useEffect, useState } from 'react';

const Test3Sub = ({onToggle}) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const onMove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mouseover', onMove)
        return() => {
            console.log('뒷정리')
            window.removeEventListener('mouseover', onMove)
        }
    }, [])

    return (
        <div>
            <h1>마우스 좌표</h1>
            <div style={{border:'1px solid #000', width:300, padding:20, margin:15}}>
                <h3>x:{x}, y축: {y}</h3>
            </div>
        </div>
    );
};

export default Test3Sub;