import React, { useState } from 'react';
import '../assets/css/reset.css'
import './Test5.css'

const user = [
    {id:1, name:'최우식', age:22, addr:'서울', done:true },
    {id:2, name:'김지인', age:22, addr:'서울', done:false },
    {id:3, name:'김다미', age:22, addr:'서울', done:false },
    {id:4, name:'배다해', age:22, addr:'서울', done:true },
    {id:5, name:'홍길동', age:22, addr:'서울', done:true }
]

const Test5 = () => {
    const [data, setData] = useState(user)

    return (
        <>
            <table className="list">
                <caption>그해 우리는 출연진</caption>
                <colgroup>
                    <col className="num" />
                    <col className="name" />
                    <col className="age" />
                    <col className="addr" />
                    <col className="consent" />
                </colgroup>

                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의여부</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        user.map( (item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.addr}</td>
                                    <td>
                                        {item.done? '동의' : '비동의'}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    );
};

export default Test5;