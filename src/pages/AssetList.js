import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
export default function AssetList(){

  const [assets,setAssets] = useState([]);
const navigate = useNavigate();
  useEffect(()=>{
    loadAssets();
  },[]);

  const loadAssets = async()=>{
    try{
      const res = await API.get("/assets/getallassert");
      setAssets(res.data);
    }
    catch(err){
      console.log(err);
    }
  }

  // ✅ Delete Asset
const deleteAsset = async(id)=>{
  try{

    await API.delete(`/assets/deleteby/${id}`);

    alert("Asset Deleted Successfully");

    loadAssets();

  }
  catch(err){
    console.log(err);
    alert("Delete Failed");
  }
}


  // ✅ Update Asset (Redirect to update page later)
  const updateAsset = (id)=>{
    alert("Update Feature Coming Soon for ID : " + id);
  }

  return(
    <div style={{padding:"40px"}}>

      <h2>Asset List</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Asset Name</th>
            <th>Category</th>
            <th>Serial Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {
            assets.map(asset=>(
              <tr key={asset.id}>

                <td>{asset.id}</td>
                <td>{asset.assetName}</td>
                <td>{asset.category}</td>
                <td>{asset.serialNumber}</td>
                <td>{asset.status}</td>

                <td>

                 <button onClick={()=>navigate(`/updateasset/${asset.id}`)}>
Update
</button>

                  <button 
                    onClick={()=>deleteAsset(asset.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  )
}