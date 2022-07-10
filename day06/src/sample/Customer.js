import React, { useRef, useState } from 'react';
import AddUser from './AddUser';
import ListUser from './ListUser';
import '../assets/css/reset.css'
import './style.css'
import EditUser from './EditUser';
import Message from './Message';

const dataList = [
    {id:1, name:'김태리', addr:'서울'},
    {id:2, name:'김태리2', addr:'서울2'},
    {id:3, name:'김태리3', addr:'서울3'},
    {id:4, name:'김태리4', addr:'서울4'},
    {id:5, name:'김태리5', addr:'서울5'},
]

const Customer = () => {
    const no = useRef(dataList.length + 1)

    const [data, setData] = useState(dataList);
    const [isEdit, setIsEdit] = useState(false)
    const [current, setCurrent] = useState({})
    const [msg, setMsg] = useState('')
    const [isShow, setIsShow] = useState(false)

    const onDel = (id) => {
        setData(data.filter( item => item.id !== id  ))
    }
    const onAdd = (user) => {
        setData([
            ...data,
            {
                id:no.current++,
                name: user.name,
                addr: user.addr
            }
        ])
        setIsShow(true)
        setMsg('명단 추가 완료')
    }

    const onEdit = (user) => {
        setIsEdit(true)
        setCurrent(user)
        setIsShow(true)
        setMsg('수정완료')
    }

    const onUpdata = (user) => {
        setIsEdit(false)
        setData(data.map(item => item.id === user.id ? user : item ))
    }
    return (
        <div>
            <div className="Customer">
                <Message isShow={isShow} msg={msg} setIsShow={setIsShow} />
                {
                    isEdit ? <EditUser current={current} onUpdata={onUpdata} setIsEdit={setIsEdit} /> : <AddUser onAdd={onAdd} />
                }
                <ListUser data={data} onDel={onDel} onEdit={onEdit} />
            </div>
        </div>
    );
};

export default Customer;