import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const dataList = [
    {id:1, name: '김다미'},
    {id:2, name: '김지인'},
    {id:3, name: '김수미'},
    {id:4, name: '김성미'},
    {id:5, name: '김유미'},
]

const Test7 = () => {
    const [data, setData] = useState( dataList )

    const onDel = (id) => {
        setData( data.filter(item => item.id !== id))
    }

    const onAdd1 = () => {
        setData([
            ...data,
            { id:6, name: '추가이름1' }
        ])
    }

    const onAdd2 = (name) => {
        setData([
            ...data,
            {id:7, name}
        ])
    }

    const onMod2 = (id) => {
        setData(data.map(item => {
            if(item.id === id) {
                return {
                    ...item, 
                    name: '강호동'
                }
            }else{
                return item
            }
        }))
    }

    const onMod = (id) => {
        setData(data.map(item => item.id === id ? {...item, name:'친구'} : item))
    }

    return (
        <div>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.name}</li>)
                }    
            </ul>


            <Test7Sub onDel={onDel} onAdd1={onAdd1} onAdd2={onAdd2} onMod={onMod}/>
        </div>
    );
};

export default Test7;