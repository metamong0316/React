import React from 'react';

const Test2 = () => {
    //함수영역
    let name = '김지인'
    let age = 20
    const addr = '서울'
    const tel = '010-2020-2020'
    return (
        <>
            <h2>JSX에서 자바스크립트 식: {} </h2>
            <ul>
                <li>이름: {name}</li>
                <li>나이: {age}</li>
                <li>지역: {addr}</li>
                <li>번호: {tel}</li>
            </ul>
        </>
    );
};

export default Test2;