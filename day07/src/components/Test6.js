import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 300px; border:1px solid #000; padding: 20px; margin: 20px auto;
`
const Box1 = styled.section`
    padding: 15px;
    border: 1px solid #000;
    margin-bottom: 15px; transition: :.5s;
    &:hover{
        background-color: tomato; padding:25px;
    }
`
const Box2 = styled('article')`
padding: 20px; background-color: yellow; margin-bottom: 15px; transition:.4s; 
&:hover {
    background-color: pink; text-indent: 20px
}
`
const Box3 = styled('button')`
    width: 100%auto; border:none; background-color: #333; color:#fff; height:40px; transition: .4s;
    &:hover {
        background-color: lightblue; text-indent:20px;
    }
`

const Test6 = () => {
    return (
        <Container>
            <Box1>안녕하세요</Box1>
            <Box2>안녕하세요</Box2>
            <Box3>안녕하세요</Box3>
        </Container>
    );
};

export default Test6;

/* components를 style 하기 위해서 만든다. 
const 컴포넌트명 = styled.태그명₩
css 작성
₩


const 컴포넌트명 = styled.('태그')₩
    css작성
₩

상단 
하단 상관없음

통상적으로 상단에 작성
*/