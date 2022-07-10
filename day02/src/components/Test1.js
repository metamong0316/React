// 파일 확장자 .jsx 와 같다.

import React from 'react';

const Test1 = () => {
    return (
        <>
            <h1>JSX 영역 : JSX라 하며 JavaScript를 확장한 문법</h1>
            {/* 컴포넌트명은 반드시 첫글자가 대문자 이여야 한다(예전방식) */}
            <h2>
                한 줄 이상은 div, section, acticle, tr, td, ul .. 묶어서 만듦.
            </h2>
            <h2>빈 태그 반드시 맨 뒤에 "/" 넣기</h2>
            <img/>
            <input/>
            <br/>
            <hr/>
            {/* 주석 설명 */}
            <div //한줄 주석
            /*
            여러줄 주석
            */
            >입력내용</div>
        </>
    );
};

export default Test1;