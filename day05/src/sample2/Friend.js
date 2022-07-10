import React, { useRef, useState } from 'react';
import './Friend.css';
import FriendList from './FriendList'
import FriendInput from './FriendInput'
import dataList from '../assets/api/friendData'

const Friend = () => {
    const [data, setData] = useState(dataList)

    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const onRemove = () => {
        setData([])
    }

    const onReset = () => {
        setData(dataList)
    }

    const [isChk, setIsChk] = useState(false)
    const no = useRef(data.length + 1)

    //추가
    const onAdd1 = (name, age,image) => {
        setData([
            ...data,
            {
                id: no.current++,
                name, age, image
            }
        ])
    }

    const onAdd = (form) => {
        form.id = no.current++
        setData([
            ...data,
            form
        ])
    }

    return (
        <div className="wrap">
            <h1>친구들 총 인원: {data.length}</h1>
            <p className="chk">
                <input type="checkbox" checked={isChk} onChange={e => setIsChk(e.target.checked)}/>
                {
                    isChk? "추가비활성" : "추가활성"
                }
            </p>

            <FriendList data={data} onDel={onDel} />
            
            <p className="btn">
                <button onClick={onRemove}>모두삭제</button>
                <button onClick={onReset}>초기복구</button>
            </p>

            {/* {isChk && <FriendInput /> } */}
            <FriendInput isChk={isChk} onAdd={onAdd} />
        </div>
    );
};

export default Friend;