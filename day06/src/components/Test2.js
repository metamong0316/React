import React, { useEffect, useRef, useState } from 'react';

const Test2 = () => {
    const ref1 = useRef()
    const [text, setText] = useState('')

    useEffect(()=>{
        console.log('useEffect')
        ref1.current.focus()
    }, [])
    
    return (
        <div>
            <h2> useEffect 형식2</h2>
            <input type="text" ref={ref1} value={text} onChange={e => setText(e.target.value) } />
        </div>
    );
};

export default Test2;