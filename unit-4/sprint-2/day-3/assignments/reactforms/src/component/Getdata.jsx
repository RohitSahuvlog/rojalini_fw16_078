import React, { useEffect } from 'react'
import Displaydata from './Displaydata';

 const Getdata = ( {empData, setempData }) => {

    useEffect(() => {
        const getData = async () => {
          try {
            let res = await fetch(`http://localhost:4000/employee`);
            let data = await res.json();
            setempData(data);
          } catch (error) {
            console.log(error);
          }
        };
        getData();
      }, []);
    
  return (
  <div>

    <h1>Employees Info</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital Status</th>
              </tr>
            </thead>
            <tbody>
              {empData.map((emp) => {
                return <Displaydata key={emp.id} {...emp} />;
              })}
            </tbody>
          </table>
    
    </div>
  )
 }
export default Getdata;