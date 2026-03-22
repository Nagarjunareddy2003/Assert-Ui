import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import AssetInsert from "./pages/AssetInsert";
import AssetList from "./pages/AssetList";
import EmployeeInsert from "./pages/EmployeeInsert";
import EmployeeList from "./pages/EmployeeList";
import Allocation from "./pages/Allocation";
import UpdateAsset from "./pages/UpdateAsset";
function App(){
  return(
    <BrowserRouter>

      <div style={{display:"flex"}}>
        <Sidebar />

        <div style={{flex:1}}>
          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/asset-insert" element={<AssetInsert />} />
            <Route path="/assets" element={<AssetList />} />
              <Route path="/employee-insert" element={<EmployeeInsert/>} />
  <Route path="/employees" element={<EmployeeList/>} />
  <Route path="/allocate" element={<Allocation/>}/>
  <Route path="/updateasset/:id" element={<UpdateAsset/>}/>


          </Routes>
        </div>

      </div>

    </BrowserRouter>
  )
}

export default App;