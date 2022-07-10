import React from 'react';

const Test1 = () => {
    const title = '신상명세서'
    const arr = ['김지인', '김다미', '김태리', '최진혁', '남주혁']
    const data = [
        {id: 1, name:'김지인'},
        {id: 2, name:'김다미'},
        {id: 3, name:'김태리'},
        {id: 4, name:'최진혁'},
        {id: 5, name:'남주혁'},
    ]

    return (
        <>
            <h2>{title}</h2>
            <ul>
                {
                    arr.map((item, idx) => {
                        return (<li key={idx}>{idx}/{item}</li>)
                    })
                    // index : 변경할 수 있다
                    // index 는 단순 출력만 할 때(삭제, 수정, 추가 x)
                }
            </ul>

            <hr />

            <ul>
                {
                    arr.map( (item,idx) => <li key={idx}>{idx}/{item}</li>)
                }
            </ul>

            <hr/>

            <ul>
                {
                    data.map((item,idx) => {
                        return (<li key={idx}>{item.id}/{item.name}</li>)
                    })
                }
            </ul>

            <hr/>

            <ul>
                {
                    data.map( item => {
                        return <li key={item.id}>
                            {item.id}/{item.name}
                        </li>
                    } )
                }
            </ul>

            <hr/>

            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/ {item.name}</li>)
                }
            </ul>
        </>
    );
};

export default Test1;

/*
Key : 중복 안됨, 유일성, 고유성  예) 주민번호
- 영문, 숫자 상관 없음, but 객체의 고유 id를 사용

Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. 
key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.


https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map#syntax

Array.prototype.map()
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.


구문
arr.map(callback(currentValue[, index[, array]])[, thisArg])

arr.map(함수(현재값, 인덱스)
arr.map(function(item, index){
    return 반환값
})
**
arr.map((item, index) => {
    return 반환값 (), {}
})

일급함수: 함수를 반환값 처리한다.
**
arr.map((item, index) => 반환값 )

매개변수
callback : 함수
currentValue : 현재값
index Optional : 인덱스

반환 값
새로운 배열. 
*/