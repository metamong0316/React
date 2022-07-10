import React, { useState } from 'react';

const dataList = [
    {id:1, name: 'chk1', text: '연령 14세 이상 확인(필수)1', isChk: false },
    {id:2, name: 'chk2', text: '이용약관 동의(필수)2', isChk: false },
    {id:3, name: 'chk3', text: '연령 14세 이상 확인(필수)3', isChk: false },
    {id:4, name: 'chk4', text: '연령 14세 이상 확인(필수)4', isChk: false },
]
const Test6 = () => {
    const [data,setData] = useState(dataList)

    const changeInput = (e) => {
        const {name, checked} = e.target
        if(name == 'all'){
            setData( data.map(item => {
                return {
                    ...item,
                    isChk: checked
                }
            }))
        } else {
            setData(
                data.map(item => item.name === name? {
                    ...item, isChk:checked
                } : item)
            )
        }
    }
    return (
        <div>
            <p>
                <input type="checkbox" name="all" onChange={changeInput} checked={data.filter(item => item.isChk !== true).length < 1} />
                <label>약관 전체 동의</label>
            </p>

            <hr />

            {
                data.map(item => <p key={item.id}>
                    <input type="checkbox" name={item.name} checked={item.isChk} onChange={changeInput}/>
                    <label>{item.text}</label>
                </p>)
            }
        </div>
    );
};

export default Test6;