import { Link } from "react-router-dom";

export default function Sidebar(){
  return(
    <div style={sidebarStyle}>

      <h2>Asset System</h2>

      <Link style={linkStyle} to="/">Dashboard</Link>
      <Link style={linkStyle} to="/asset-insert">Add Asset</Link>
      <Link style={linkStyle} to="/assets">View Assets</Link>
      <Link style={linkStyle} to="/employee-insert">Add Employee</Link>
      <Link style={linkStyle} to="/employees">Employees</Link>
      <Link style={linkStyle} to="/allocate">Allocate Asset</Link>

    </div>
  )
}

const sidebarStyle = {
  width:"220px",
  height:"100vh",
  background:"#1e293b",
  color:"white",
  padding:"20px",
  display:"flex",
  flexDirection:"column",
  gap:"15px"
}

const linkStyle = {
  color:"white",
  textDecoration:"none",
  fontSize:"18px"
}