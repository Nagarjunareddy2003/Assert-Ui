import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function UpdateAsset(){

  const { id } = useParams();
  const navigate = useNavigate();

  const [asset,setAsset] = useState({
    assetName:"",
    category:"",
    serialNumber:"",
    status:""
  });

  // Load Asset Data
  useEffect(()=>{
    loadAsset();
  },[]);

  const loadAsset = async()=>{
    try{

      const res = await API.get(`/assets/getallassert`);

      const selected = res.data.find(a => a.id === Number(id));

      if(selected){
        setAsset(selected);
      }

    }
    catch(err){
      console.log(err);
    }
  }

  // Update Asset
  const updateAsset = async()=>{
    try{

      await API.put(`/assets/updateassertby/${id}`,asset);

      alert("Updated Successfully");

      navigate("/assets");

    }
    catch(err){
      console.log(err);
    }
  }

  return(
    <div style={{padding:"40px"}}>

      <h2>Update Asset</h2>

      <input
        value={asset.assetName}
        placeholder="Asset Name"
        onChange={(e)=>setAsset({...asset,assetName:e.target.value})}
      />
      <br/><br/>

      <input
        value={asset.category}
        placeholder="Category"
        onChange={(e)=>setAsset({...asset,category:e.target.value})}
      />
      <br/><br/>

      <input
        value={asset.serialNumber}
        placeholder="Serial Number"
        onChange={(e)=>setAsset({...asset,serialNumber:e.target.value})}
      />
      <br/><br/>

      <button onClick={updateAsset}>
        Update Asset
      </button>

    </div>
  )
}