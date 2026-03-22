import { useState } from "react";
import API from "../services/api";

export default function EmployeeInsert(){

  const [emp,setEmp] = useState({
    name:"",
    department:"",
    email:""
  });

  const saveEmployee = async()=>{
    try{

      await API.post("/employee/insertemp",emp);

      alert("Employee Saved Successfully");

    }
    catch(err){
      console.log(err);
      alert("Error saving employee");
    }
  }

  return(
    <div style={{padding:"40px"}}>

      <h2>Add Employee</h2>

      <input
        placeholder="Employee Name"
        onChange={(e)=>setEmp({...emp,name:e.target.value})}
      />
      <br/><br/>

      <input
        placeholder="Department"
        onChange={(e)=>setEmp({...emp,department:e.target.value})}
      />
      <br/><br/>

      <input
        placeholder="Email"
        onChange={(e)=>setEmp({...emp,email:e.target.value})}
      />
      <br/><br/>

      <button onClick={saveEmployee}>
        Save Employee
      </button>

    </div>
  )
}