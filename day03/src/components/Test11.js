import React, { useState } from 'react';

const Test11 = () => {
    const [color, setColor] = useState('skyblue')
    const [text, setText] = useState('')

    const onView = () => {
        setColor(text)
    }
    
    const onColor = (e) => {
        // setColor(e.target.value)
        const {value} = e.target
        setText(value) 
    }


    return (
        <div>
            <h2 style={{fontSize: 50, color: color}}>컬러바꾸기</h2>
            <select onChange={onColor}>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="hotpink">blue</option>
            </select>

            <button onClick={onView}>확인</button>
        </div>
    );
};

export default Test11;