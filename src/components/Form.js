import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './Form.css'

export default function Form() {

    const navigate=useNavigate();
    const [form,setForm]=useState({
        name:"",
        class:"",
        roll:"",
        dob:""
    });

    const handleSubmit=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const submitForm= async (e)=>{
        e.preventDefault();
        navigate("/show",{state:form})
        console.log(form);
    }

    return (
        <div className="container">
            <h1>Student Details</h1>
            <form className='box' onSubmit={(e)=>{submitForm(e)}}>
                <section className="inp_data">
                    <label htmlFor="name"></label>
                    <input onChange={handleSubmit} id="name" name="name" type="text" placeholder='Student Name' required />
                </section>
                <section className="inp_data">
                    <label htmlFor="class"></label>
                    <input onChange={handleSubmit} id="class" name="class" type="text" placeholder='Class' required />
                </section>
                <section className="inp_data">
                    <label htmlFor="roll"></label>
                    <input onChange={handleSubmit} id="roll" name="roll" type="number" placeholder='Roll Number' required/>
                </section>
                <section className="dt">
                    <label htmlFor="date">DOB: </label>
                    <input onChange={handleSubmit} id="dob" name="dob" type="date" required/>
                </section>
                <button type='submit' >Submit</button>
            </form>

        </div>
    )
}