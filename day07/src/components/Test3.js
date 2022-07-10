import React from 'react';
import './Test3.css'
import myStyle from './Test3.module.css'

const Test3 = () => {
    return (
        <div>
            <div className="box">Test</div>
            <div className={myStyle.box}>Test</div>
        </div>
    );
};

export default Test3;

/*
css 컴포넌트는 재사용 , 유지보수,

파일명.module.css
import 참조변수 from './파일명.module.css'
<요소명 className = {참조변수. 클래스명} >

실제 태그에서는 
파일명_클래스명_아무말.. 

1. css(scss) - 전체 style.css 하나를 만들고 연결 방법 (x)
2. 폴더별로 컴포넌트 분리를 하고 css를 각각 컴포넌트 별로 만드는 것이 좋다.
예) todos 예시 참조
    클래스명이 중복이 될 수 있다.
    .module.css 선호한다
*/