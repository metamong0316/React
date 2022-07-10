import React, { useState }  from 'react';
import './Test6.css'



const Test6 = () => {
    const [bgColor, setBgColor] = useState(true)
    const [age, setAge] = useState(20)

    const onToggle = () => {
        setBgColor( !bgColor )
    }

    const onAge = () => {
        setAge(age + 1)
    }

    return (
        <div className={`wrap ${bgColor ? 'pink':'tomato'}`}>
            <h2>backgroundColor :  {bgColor ? 'pink':'tomato'} </h2>
            <h2>나이 : {age} </h2>
            <p>
                <button onClick={onToggle}>배경바꾸기:true/false  </button>
                <button onClick={onAge}>증가</button>
                <button onClick={() => setAge(age - 1)}>감소</button>
            </p>
        </div>
    );
};

export default Test6;