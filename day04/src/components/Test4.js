import React, { useState } from 'react';
import Test4Ani from './Test4Ani';
import Test4Dis from './Test4Dis';
import Test4Name from './Test4Name';

const Test4 = () => {
    const [name, setName] = useState('철수')
    const [ani,setAni] = useState('강아지')

    const changeInput1 = (e) => {
        const {value} = e.target
        setName(value)
    }
    const changeInput2 = (e) => {
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            <Test4Name name={name} changeInput1={changeInput1}/>
            <hr />
            <Test4Ani ani={ani} changeInput2={changeInput2}/>
            <hr />
            <Test4Dis name={name} ani={ani} />
        </div>
    );
};

export default Test4;