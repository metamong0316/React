import React from 'react';

const Test3 = () => {
    /* 
    함수영역: 변수, 제어문, 조건문 모두 사용가능하다.
    css : {} 객체  |  {키: 값}
    {'background-color' : 'pick'}
    backgroundColor, fontSize, textIndent

    */

    const title = '신상명세서'
    const name = '홍길동'
    const age = 20
    const addr = '제주'

    const css1 = {
        backgroundColor: 'hotpink', fontSize: 30, padding:15, border:'1px solid #000', margin:10 
    }
    const css2 = {
        margin:10,color:'red',
    }
    const css3 = {
        color:'blue'
    }
    return (
        <div>
            <h2 style={css1}>
                {title}
            </h2>
            <h3 style={css2}>이름 : {name}</h3>
            <h3 style={css3}>나이 : {age}</h3>
            <h3 style={{backgroundColor:'tomato', margin:20, padding:15}}>주소 : {addr}</h3>
            <p>연습입니다.</p>
            {/* 
            <p style={객체}> {자바스크립트 수식, 식, 값}</p>
            */}
        </div>
    );
};

export default Test3;