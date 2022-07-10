import React, { useState } from 'react';

const Name = () => {
    
    const [name, setName] = useState('')
    const changeInput = (e) => {
        const {value} = e.target
        setName( value )
    }

    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름: </label>
            <input type="text" value={name} onChange={changeInput } />
            <span style={{marginLeft: 10}}> {name} </span>
        </div>
    );
};

const Animail = ({ani, changeInput}) => {
    
    return (
        <div>
            <h2>Animail 컴포넌트</h2>
            <label>동물: </label>
            <input type="text" value={ani} onChange={changeInput}/>
            <span style={{marginLeft: 10}}>{ani} </span>
        </div>
    );
};

const Display = ({ani}) => {
    
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            <h1>내가 좋아하는 동물은 {ani} 입니다.</h1>
        </div>
    );
};

const Test3 = () => {
    const [pe, setPe] = useState('철수')
    const [ani, setAni] = useState('강아지')
    const changeInput = (e) => {
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            <Name pe={pe} changeInput={changeInput}/>
            <hr />
            <Animail ani={ani} changeInput={changeInput}/>
            <hr />
            <Display ani={ani} />
            <hr />
        </div>
    );
};

export default Test3;