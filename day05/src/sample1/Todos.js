import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'


const Todos = () => {
    const no = useRef(3)
    const [data, setData] = useState([
        {id:1, text:'친구만나기', isChk: false},
        {id:2, text:'미팅', isChk: false},
    ])

    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const onAdd = (text) => {
        setData([
            ...data,
            {
                id:no.current++,
                text: text,
                isChk: false
            }
        ])    
    }

    const onMod = (id) => {
        setData(data.map(item => item.id === id ? {...item, isChk: !item.isChk } : item
        ))
    }

    return (
        <div className="Todos">
            <h1>TodoList 할일 만들기</h1>

            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onMod={onMod}/>
        </div>
    );
};

export default Todos;