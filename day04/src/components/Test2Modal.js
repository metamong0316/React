import React from 'react';

const Test2Modal = ({onClose}) => {
    return (
        <>
            <div className="bg"></div>
            <div className="popup">
                <p className="close" onClick={onClose}>X</p>
                <h2>팝업띄우기</h2>
            </div>
        </>
    );
};

export default Test2Modal;