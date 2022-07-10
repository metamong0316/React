import React from 'react';
import PropTypes from 'prop-types';

const Test8Sub = ({name, age, addr, tel, color, bgColor, done}) => {
    
    return (
        <div style={{width:500, margin:20, border:`5px solid ${color}`, padding: 15, background:bgColor }}> 
            <h2> {name}의 신상명세서</h2>
            <ul>
                <li>이름: {name}</li>
                <li>나이: {age}</li>
                <li>주소: {addr}</li>
                <li>번호: {tel}</li>
                <li>보더컬러: {color}</li>
                <li>배경컬러: {bgColor}</li>
                <li>동의여부: {done ? '동의' : '비동의'}</li>
            </ul>
        </div>
    );
};

Test8Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  };

  Test8Sub.defaultProps = {
    name: '아무개',
    age: 20,
    addr: '서울',
    tel: '010-3030-0000',
    color: '#fff',
    bgColor: 'greem',
    done: false,
}
  
/*
해당컴포넌트.propTypes = {
    props명 : PropTypes.타입
};  

초기값 prop 값
defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있습니다.
해당컴포넌트.defaultProps = {
    props명: '초기값'
}
*/

export default Test8Sub;