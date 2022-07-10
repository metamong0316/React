import React from 'react';

const Step2 = ({ form, changeInput, prev, next}) => {
    const {job, email, sex, inter} = form
    return (
        <>
            <p>
                <label>직업</label> : 
                <input type="text" onChange={changeInput} name="job" value={job} />
            </p> 
            <p>
                <label>이메일</label> : 
                <input type="text" onChange={changeInput} name="email" value={email} />
            </p> 
            <p>
                <label>성별</label> : 
                <input type="text" onChange={changeInput} name="sex" value={sex} />
            </p> 
            <p>
                <label>관심분야</label> : 
                <input type="text" onChange={changeInput} name="inter" value={inter} />
            </p>   
            <p>
                <button onClick={prev}>이전</button>
                <button onClick={next}>다음</button>
            </p>
        </>
    );
};

export default Step2;