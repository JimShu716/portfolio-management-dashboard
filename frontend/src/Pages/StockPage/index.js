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
                <Header path="Trade"/>
                <div className="containers-container">
                    <div className="dashboard-container" style={{height: "200px", width: "700px"}}>
                        <div className="dashboard-container-title">Stock Chart</div>
                    </div>
                    <div className="dashboard-fancy-container" style={{height: "400px", width: "250px"}}>
                        <div className="dashboard-container-title">Stocks User have</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock;