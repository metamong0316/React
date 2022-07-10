import React, { useState } from 'react';
import '../assets/css/reset.css'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css'

const Main = () => {

    const [form, setForm] = useState({
        username: '',
        age: '',
        addr: '',
        tel: '',
        job: '',
        email: '',
        sex: '',
        inter: ''
    }) 

    const [step, setStep] = useState(1)

    const prev = () => {
        setStep( step - 1 ) 
    }

    const next = () => {
        setStep( step + 1 ) 
    }


    //form.username 비구조
    const {username, age, addr, tel, job, email, sex, inter} = form

    const changeInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    return (
        <div className="wrap">
            {
                step === 1 && <Step1 form={form}changeInput={changeInput} next={next}/>
            }
            
            {
                step === 2 && <Step2 form={form} changeInput={changeInput} prev={prev }  next={next} />
            }

            {
                step === 3 && <Step3 {...form} prev={prev }  next={next} />
            }

            {
                step === 4 && <Step4 username={username} />
            }
           
        </div>
    );
};

export default Main;