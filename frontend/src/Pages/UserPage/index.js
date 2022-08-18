import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import {Divider} from "@mui/material";

const User = (props) =>{
    const [response, setResponse] = useState("");

    useEffect(()=>{
        // get data from backend
        axios.get(process.env.REACT_APP_HOST + '/1', ).then(r => {
            console.log(r)
        });
    }, [])

    return (
        <div style={{display: "flex"}}>
            <Sidebar title="User Profile" />
            <div style={{flexGrow: 1}}>
                <Header />
                <div style={{height:"calc(100vh - 56px)"}}>
                    <div className="containers-container" style={{height: "50%"}}>
                        <div className="dashboard-container">
                            <div className="dashboard-container-title">Analysis Chart</div>
                            <div>A chart to show balance changes ???</div>
                        </div>
                        <div className="dashboard-fancy-container">
                            <div className="dashboard-container-title">Balance</div>
                            <div className="dashboard-container-title">$200,000</div>
                            <div className="dashboard-fancy-container-button" style={{marginBottom: "25px", marginTop: "auto"}}>Transfer Money</div>
                        </div>
                    </div>
                    <div className="containers-container" style={{height: "50%"}}>
                        <div className="dashboard-container">
                            <div className="dashboard-container-title">Trade History</div>
                            <div>A table here</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;