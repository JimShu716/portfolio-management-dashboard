import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";

const Stock = (props) =>{
    return (
        <div style={{display: "flex"}}>
            <Sidebar title="Trade" />
            <div style={{flexGrow: 1}}>
                <Header path="Trade" />
                <div className="containers-container">
                    <div className="dashboard-container" style={{height: "100px", width: "200px"}}>
                        <div className="dashboard-container-title">Total</div>
                    </div>
                    <div className="dashboard-container" style={{height: "100px", width: "200px"}}>
                        <div className="dashboard-container-title">Overview</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock;