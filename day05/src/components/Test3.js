import React, { useRef, useState } from 'react';

const Test3 = () => {
    const no = useRef(1)
    const [data, setData] = useState([])
    const names = '장원영, 김유진, 김소희, 한소희, 아이유, 장동연, 멜로망스, 김민석, 김수민, 김지인'.split(',')
    //  string  객체 매서드
    const onAdd = () => {
        // const ran = names의 개수에서 랜덤으로 처리'
        const ran = Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                id:no.current++,
                text : names[ran]
            }
        ])
        // text: names를 배열처리해서 ran값으로 나오게 
        
    }
    return (
        <div>
            <h2>데이터추가</h2>
            <button onClick={onAdd}>추가</button>
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test3;