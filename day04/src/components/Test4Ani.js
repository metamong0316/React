import React from 'react';

const Test4Ani = ({ani, changeInput2}) => {
    return (
        <div>
            <h2>Ani 컴포넌트</h2>
            <label>동물: </label>
            <input type="text" value={ani} onChange={changeInput2}/>
            <span> {ani}</span>
        </div>
    );
};

export default Test4Ani;