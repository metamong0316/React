import React from 'react';

const Test4Name = ({name, changeInput1}) => {
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름: </label>
            <input type="text" value={name} onChange={changeInput1} />
            <span> {name}</span>
        </div>
    );
};

export default Test4Name;