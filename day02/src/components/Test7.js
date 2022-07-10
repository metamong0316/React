import React from 'react';

// const Sub = (props) => {

//     return (
//         <div style={{borderBottom:'1px solid #333', marginBottom:12}}>
//            <h2>자식 컴포넌트</h2>
//            <h3>이름: {props.name} / ({typeof props.name})</h3>
//            <h3>나이: {props.age} / ({typeof props.age})</h3>
//         </div>
//     );
// };

// const Sub = (props) => {
//     const { name, age } = props

//     return (
//         <div style={{borderBottom:'1px solid #333', marginBottom:12}}>
//            <h2>자식 컴포넌트</h2>
//            <h3>이름: {name} / ({typeof name})</h3>
//            <h3>나이: {age} / ({typeof age})</h3>
//         </div>
//     );
// };

const Sub = ({name, age}) => {
    
    return (
        <div style={{borderBottom:'1px solid #333', marginBottom:12}}>
           <h2>자식 컴포넌트</h2>
           <h3>이름: {name} / ({typeof name})</h3>
           <h3>나이: {age} / ({typeof age})</h3>
        </div>
    );
};

const Test7 = () => {
    const data1 = {name: '강아지', age: 3}
    const data2 = {name: '고양이', age: 5}
    
    return (
        <>
            <h2>props 설명</h2>
            <Sub name="김다미" age="20"/>
            <Sub name="박효신" age={25}/>
            <Sub name={data1.name} age={data1.age} />
            <Sub name={data2.name} age={data2.age}/>
            <Sub {...data1 } />
            <Sub {...data2 } />
        </>
    );
};

export default Test7;

/*
컴포넌트에 값을 전달하는 것

자식에서 부모에 값을 콜백으로 전달할 때
<자식 컴포넌트 전달자 = 값>
<자식 컴포넌트 props = 전달값>
전달값: 문자, 숫자, 논리값, - {숫자}, {논리}
함수, state, setState

props명은 변수처리 사용자 정의
영문자, 한글 가능 ?

*/