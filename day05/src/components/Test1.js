import React, { useState } from 'react';
import Test1Sub from './Test1Sub';


const dataList = [
    {id:1, name:'김철수'},
    {id:2, name:'김철수2'},
    {id:3, name:'김철수3'},
]

const Test1 = () => {
    const [data, setdata] = useState(dataList)

    const onAdd1 = (name) => {
        setdata(data.concat({id:4, name})) //추가
    }
    const onAdd2 = (text) => {
        setdata([
            ...data,
            {
                id:5, name: text
            }
        ])
    }

    const onDel1 = (num) => {
        setdata(data.filter(item => item.id !== num ))
    }
    const onDel2 = (id) => {
        setdata(data.filter(item => item.id !== id ))
    }

    const onMod1 = (id) => {
        setdata(data.map(item => {
            if(item.id === id){
                return{
                    ...item,
                    name: '유재석'
                }
            }else{
                return item
            }
        }))
    }
    const onMod2 = (id) => {
        setdata(data.map(item => item.id === id ? {...item, name:'유느님'} : item ))
    }


    return (
        <div>
            <Test1Sub onAdd1={onAdd1} onAdd2={onAdd2} onDel1={onDel1} onDel2={onDel2} onMod1={onMod1} onMod2={onMod2} />
            
        </div>
    );
};

export default Test1;