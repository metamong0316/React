import React from 'react';

const Test1Sub = ({onAdd1, onAdd2, onDel1, onDel2, onMod1, onMod2}) => {
    return (
        <div>
            <p>
                <button onClick={() => onAdd1('김태리')}>추가1</button>
                <button onClick={() => onAdd2('김어청')}>추가2</button>
            </p>

            <p>
                <button onClick={() => onDel1(1)}>삭제</button>
                <button onClick={() => onDel2(2)}>삭제</button>
            </p>

            <p>
                <button onClick={() => onMod1(1)}>수정</button>
                <button onClick={() => onMod2(2)}>수정</button>
            </p>
        </div>
    );
};

export default Test1Sub;