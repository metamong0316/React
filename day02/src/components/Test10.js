import React, { useState } from 'react';

const Test10 = () => {
    const [name, setName] = useState('홍길동')
    const [age, setAge] = useState('30')
    const [color, setColor] = useState('pink')

    const onName1 = () => {
        setName('김태리')
    }

    const onName2 = () => {
        setName('나희도')
    }

    const onName3 = () => {
        setName('김다미')
    }

    return (
        <div>
            <h2 style={{backgroundColor:color, padding: 10, margin:20,}}>
                이름:{name}, 나이:{age} , 컬러:{color}
            </h2>
            <p>
                <button onClick={ onName1 }>김태리</button>
                <button onClick={ onName2 }>나희도</button>
                <button onClick={ onName3 }>김다미</button>
            </p>

            <p>
                <button onClick ={() => {setColor('purple')}}>purple</button>
                <button onClick = { () => {setColor('aqua')} }>aqua</button>
                <button onClick = { () => {setColor('green')} }>green</button>
            </p>

            <p>
                <button onClick={() => {setAge(20)}}>20살</button>
                <button onClick={() => {setAge(28)}}>28살</button>
                <button onClick={() => {setAge(36)}}>36살</button>
            </p>
        </div>
    );
};

export default Test10;

/* 
Hook은 React 16.8버전

함수형 컴포넌트는 
렌더링 할 때마다 내부의 것들을 기억하지 못한다.
다시 생성 초기화 (함수, 변수)

내부의 것들을 유지하기 위해서 값을 기억한다. - Hook 등장-!

값을 유동을 변경해주고 기억 : useState  
const [count, setCount] = useState(0);
const [상태데이터, 상태데이터를 변경해주는 함수] = useState(초기값);
const [변수, 변수를 변경해주는 함수] = useState(0);

const [A, B] = useState(0);
A = 0;
B() => B(100) => A(100)
*/