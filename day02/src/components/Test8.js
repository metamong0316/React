import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    return (
        <>
            <Test8Sub 
                name="김지인"
                age= {28}
                addr = "신림"
                tel = "010-4030-2030"
                done = {true}
                color = "purple"
                bgColor = "yellow"
            />
            <hr />
            <Test8Sub 
                name = "김다미"
                addr = "울산"
                color = "blue"
                bgColor = "mint"
            />
            <hr />
            <Test8Sub />
            <hr />
            
        </>
    );
};

export default Test8;