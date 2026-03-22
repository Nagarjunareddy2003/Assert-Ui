import { useEffect, useState } from "react";
import API from "../services/api";

export default function EmployeeList(){

  const [emps,setEmps] = useState([]);

  useEffect(()=>{
    loadEmployees();
  },[]);

  const loadEmployees = async()=>{
    try{
      const res = await API.get("/employee/getallemp");
      setEmps(res.data);
    }
    catch(err){
      console.log(err);
    }
  }

  return(
    <div style={{padding:"40px"}}>

      <h2>Employee List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
            emps.map(emp=>(
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.email}</td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  )
}