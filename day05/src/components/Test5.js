import React, { useRef, useState } from 'react';

const Test5 = () => {

    const [data, setData] = useState([])
    //{id: 1, text:'ddd', addr:'ddfsfd'}

    const [form, setForm] = useState({
        text: '' , addr: ''
    })
    const {text, addr} = form

    const no = useRef(1)
    const textRef = useRef()

    const onAdd = () => {
        setData([
            ...data,
            {
                id:no.current++,
                text,
                addr 
            }
        ])
        setForm({
            text: '',
            addr: ''
        })
        textRef.current.focus()
    }

    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value,
        })
    }

    return (
        <div>
            <div>
                <input type="text" value={text} name="text" onChange={changeInput} ref={textRef} />
                <input type="text" value={addr} name="addr" onChange={changeInput} />
                <button onClick={onAdd}>추가</button>

                <ul>
                    {
                        data.map(item => <li key={item.id}> {item.id} / {item.text} / {item.addr} </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Test5;