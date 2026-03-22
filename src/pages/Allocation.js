import React, { useState } from "react";
import axios from "axios";

function AssetAllocation() {

    const [assetId, setAssetId] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [message, setMessage] = useState("");

    const allocateAsset = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                `https://asset-sb-2.onrender.com/allocation/allocate?assetId=${assetId}&employeeId=${employeeId}`
            );

            setMessage(response.data);

        } catch (error) {
            setMessage("Allocation Failed");
            console.log(error);
        }
    };

    return (
        <div style={{
            width: "350px",
            margin: "50px auto",
            padding: "20px",
            boxShadow: "0px 0px 10px #ccc",
            borderRadius: "10px"
        }}>

            <h2>Allocate Resource</h2>

            <form onSubmit={allocateAsset}>

                <input
                    type="number"
                    placeholder="Enter Asset ID"
                    value={assetId}
                    onChange={(e) => setAssetId(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    required
                />

                <input
                    type="number"
                    placeholder="Enter Employee ID"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    required
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        background: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "5px"
                    }}
                >
                    Allocate
                </button>

            </form>

            <h3>{message}</h3>

        </div>
    );
}

export default AssetAllocation;