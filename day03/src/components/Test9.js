import React, { useRef } from 'react';

const Test9 = () => {
    const idRef = useRef(null)
    const pwRef = useRef()

    const onShow = ( ) => {
        const data = {
            id: idRef.current.value,
            pw: pwRef.current.value
        }

        console.log(data)
    }

    return (
        <div>
            {/* 수업용: 좋은 예는 아님 */}

            <input type="text" ref={idRef} />
            <input type="text" ref={pwRef} />
            <button onClick={onShow}>확인</button>
        </div>
    );
};

export default Test9;

/*
useRef

직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능

useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

​

공식문서 내용

useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다

useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

const 이름 = useRef(null)
const 이름 = useRef()
const 이름 = useRef(초기값) = 유지값
const 이름 = useRef(5) - 유지값

<태그 ref = { 이름 } />

이름.current.style.color = xx
이름.current.style.fonSize = xx

useRef 는 참조를 목적으로 사용되지만
컴포넌트 렌더링에영향을 주지 않느 것을 목적으로 한다
함수 컴포넌트 내부 특정값을 지속적으로 참조할 때 사용한다.



*/