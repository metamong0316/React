import React from 'react';

const Step2 = ({job, email, sex, inter, changeInput, prev, next}) => {
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