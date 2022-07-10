import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [count, setcount] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()
    const onColor = () => {
        setcount(count + 1)
        ref1.current.style.backgroundColor = 'skyblue'
        ref2.current.style.backgroundColor = 'yellow'
    }

    // 화면에 그려진 후 실행
    useEffect( () => {
        ref1.current.style.backgroundColor = 'red'
    })


    // 화면에 그려지기 전 실행
    useLayoutEffect(() => {
        ref2.current.style.backgroundColor = 'hotpink'
    })

    return (
        <div>
            <h2>hooks : useEffect 형식1</h2>

            <h1>카운트 : {count}</h1>
            <h2 ref={ref1}>useEffect</h2>
            <h2 ref={ref2}>결과입니다.</h2>
            <button onClick={onColor}>컬러, 숫자</button>
        </div>
    );
};

export default Test1;

/* 
useEffect 
Hooks는 React 16.8버전에 새로 추가되었습니다. Hook은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있습니다

Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.

side effect : 부수효과 - 함수가 결과값을 반환하는 것 외에 다른일을 할때
side effect : 비동기 처리 요청/응답 - ajax
              DOM구조, 조작/취소 등

React의 class 생명주기
componentsDidMount, 처음한번만
componentDidUpadata, 갱신
compoentWillUnmount, 종료시

함수형 컴포넌트에서는 useEffect가 클래스의 라이프사이클 3개를 함쳐봏은 것

형식) 
useEffect(콜백함수, [의존성]) - 의존성: state, props **

형식1) mount/updata - 많이 사용하지 않는다.
useEffect(콜백함수)
useEffect( () => [
    실행문
])

형식2) mount: 한번만 실행
useEffect( 콜백함수, [])
useEffect(() => {
    실행문
}, [])

형식3) mount / updata - 의존성 대상에 의해서 props, state
useEffect( 콜백함수, [])
useEffect( () => {
    실행문
}, [state, props])

특정 props(state) 가 변경될 때 updata(다시 실행)

형식4)
useEffect( () => {
    - 정리(Clean-up)
    return() => {
        뒷정리 내용
    }
}, [state, props])


사용범위
1. props를 받아서 갱신할 때, state가 바뀌면서 갱실할 때
2. 외부 api(비동기처리)
3. setTimeout, setInterval
4. 외부라이브러리
//////////////////
useEffect -> 화면에 그려진 후 실행
*/