import React, { useRef, useState } from 'react';

const Test5 = () => {

    const idRef = useRef()

    const [ form, setForm ] = useState({
        id: '',
        pw: '',
        email: ''
    })
    //fome.id , form.pw, form['email']
    //비구조할당
    const {id, pw, email} = form

    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form ,
            [name]: value
        })
    }

    // const changeInput2 = (e) => {
    //     const {value} = e.target
    //     setForm({
    //         ...form ,
    //         ['pw']: value
    //     })
    // }

    // const changeInput3 = (e) => {
    //     const {value} = e.target
    //     setForm({
    //         ...form ,
    //         ['email']: value
    //     })
    // }

    const onreset = () => {
        setForm({
            id: '',
            pw: '',
            email: ''
        })
        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" value={id} name="id" onChange={changeInput} ref={idRef} />
            <input type="text" value={pw} name="pw" onChange={changeInput} />
            <input type="text" value={email} name="email" onChange={changeInput} />
            <button onClick={onreset}>초기화</button>
            <hr />

            <h3>아이디: {id}</h3>
            <h3>비번: {pw}</h3>
            <h3>이메일: {email}</h3>
        </div>
    );
};

export default Test5;