import React from 'react';

const Step1 = ({form, changeInput, next}) => {
    const {username, age, addr, tel } = form
    return (
        <>
            <p>
                <label>이름</label> : 
                <input type="text" onChange={changeInput} name="username" value={username} />
            </p> 
            <p>
                <label>나이</label> : 
                <input type="text" onChange={changeInput} name="age" value={age} />
            </p> 
            <p>
                <label>주소</label> : 
                <input type="text" onChange={changeInput} name="addr" value={addr} />
            </p> 
            <p>
                <label>연락처</label> : 
                <input type="text" onChange={changeInput} name="tel" value={tel} />
            </p>   
            <p>
                <button onClick={next}>다음</button>
            </p>
        </>
    );
};

export default Step1;