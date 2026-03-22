import { useState } from "react";
import API from "../services/api";

export default function AssetInsert(){

  const [asset,setAsset] = useState({
    assetName:"",
    category:"",
    serialNumber:""
  });

  const handleSubmit = async()=>{
    try{

      // Add default status before sending
      const payload = {
        ...asset,
        status:"AVAILABLE"
      }

      await API.post("/assets/insertassert",payload);

      alert("Asset Added Successfully");

    }
    catch(err){
      console.log(err);
      alert("Error adding asset");
    }
  }

  return(
    <div style={{padding:"40px"}}>

      <h2>Add Asset</h2>

      <input 
        placeholder="Asset Name"
        onChange={(e)=>setAsset({...asset,assetName:e.target.value})}
      />
      <br/><br/>

      <input 
        placeholder="Category"
        onChange={(e)=>setAsset({...asset,category:e.target.value})}
      />
      <br/><br/>

      <input 
        placeholder="Serial Number"
        onChange={(e)=>setAsset({...asset,serialNumber:e.target.value})}
      />
      <br/><br/>

      <button onClick={handleSubmit}>
        Save Asset
      </button>

    </div>
  )
}