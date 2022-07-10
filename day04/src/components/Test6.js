import React from 'react';
//src 안에 이미지
//import 참조변수 from '이미지경로';
import m0 from '../assets/img/m0.jpg'
import m1 from '../assets/img/m1.jpg'



const Test6 = () => {
    return (
        <div>
            <img src={m0} alt="" />
            <img src={m1} alt="" />

            <hr />

            {
                /* 
                public - index.html 
                images - 상대경로
                
                */

                // <img src="./images/cat0.jpg" alt="d" />
                // <img src="images/cat1.jpg" alt="d" />

            }
        </div>
    );
};

export default Test6;