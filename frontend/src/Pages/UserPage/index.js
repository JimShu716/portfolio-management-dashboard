import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import {Divider} from "@mui/material";

const User = (props) =>{
    const [response, setResponse] = useState("");

    useEffect(()=>{
        axios.get(process.env.REACT_APP_HOST + '/1', ).then(r => {
            console.log(r)
        });
    }, [])

    return (
        <div style={{display: "flex"}}>
            <Sidebar title="User Profile" />
            <div style={{flexGrow: 1}}>
                <Header path="User Profile"/>
                <div className="containers-container">
                    <div className="dashboard-container" style={{height: "37vh", width: "800px"}}>
                        <div className="dashboard-container-title">Analysis Chart</div>
                        <div>A chart to show balance changes ???</div>
                    </div>
                    <div className="dashboard-fancy-container" style={{height: "37vh", width: "200px"}}>
                        <div className="dashboard-container-title">Balance</div>
                        <div className="dashboard-container-title">$200,000</div>
                        <div>button here to add balance</div>
                    </div>
                </div>
                <div className="dashboard-container"  style={{height: "40vh", width: "1070px"}}>
                    <div className="dashboard-container-title">Trade History</div>
                    <div>A table here</div>
                </div>
            </div>
        </div>
    )
}

export default User;