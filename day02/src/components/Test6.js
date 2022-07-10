import React from 'react';

const Bird = ({name, age}) => {

    return (
        <>
            <h2>{name} 컴포넌트. {age}</h2>
        </>
    );
};

const Cat = (props) => {
    const {name} = props
    //비구조할당    
    return (
        <>
            <h2>{name}</h2>
        </>
    );
};

const Dog = ( props ) => {
    //props 는 객체인식 = 속성은 키로 설정된다.
    //props = {name : 강아지, age:10 } -> props.name, props.age
    return (
        <>
            <h2>{props.name} 나이는 {props.age}살 입니다.</h2>
        </>
    );
};

const Test6 = () => {
    return (
        <div>
            <Dog name = '강아지' age='10' />
            <hr />
            <Cat name = '고양이'/>
            <hr/>
            <Bird name = '시조새' age='20'/>
            
            {/* 
            <컴포넌트명 변수명 = 값 />
            <컴포넌트명 props명 = 전달값 />
            <컴포넌트명 속성 = 값 />
            
            */}
        </div>
    );
};

export default Test6;

/*
React 컴포넌트의 단방향 데이터 흐름. ( 컴포넌트에 값을 전달  )

props 는 properties 의 줄임말
​
부모 컴포넌트에서자식 컴포넌트에 값을 전달할때 
자식 컴포넌트에서 부모의 값을 받아올때 

React 컴포넌트는 상위 컴포넌트에서 하위 컴포넌트로 데이터(props)가 흐릅니다. 
하위 컴포넌트는 전달 받은 props를 읽기만 가능하고, 쓸 수 없습니다. (READONLY)
*/