import React, { useState } from 'react'
import './Form.css'
import Getdata from './Getdata';

const Form = () => {

    const [formdata, setFormdata] = useState({
      });
      const [empData, setempData] = useState([]);
    
      const handleChange = (e) => {
        let { name, value, type, checked } = e.target;
        value = type === "checkbox" ? checked : value;
        setFormdata({
          ...formdata,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          let res = await fetch("http://localhost:4000/employee", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata),
          });
          let data = await res.json();
          setempData([...empData, data]);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <>
            <div className="container">
                <form id="form" onSubmit={handleSubmit}>
                    <label >Name</label><br/>
                    <input type="text" name="name" onChange={handleChange}/><br></br>
                    <label >Age</label><br/>
                    <input type="text" name="age" onChange={handleChange}/><br></br>
                    <label >Address</label><br/>
                    <input type="text" name="address" onChange={handleChange} /><br></br>
                    <lebel>Department</lebel><br/>

                    <select name="dept" onChange={handleChange} >
                        <option value="Operations">Operations</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Accountant">Accountant</option>
                        <option value="Trainee">Trainee</option>
                        <option value="Manager">Manager</option>
                    </select><br></br>

                    <label >Salary</label><br />
                    <input type="text" name="salary" onChange={handleChange}/>
                    <label >Married</label><br />
                    <input type="checkbox" id="married" name="married" onChange={handleChange}/>
                    <input type="submit" id="submit" name="submit"/>
                </form>
                
            </div>
            <Getdata empData={empData} setempData={setempData} />
        </>
    )
}
export default Form;