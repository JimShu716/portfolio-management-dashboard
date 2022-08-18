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
                <Header />
                <div className="containers-container" style={{height: "calc(100vh - 100px)", marginBottom: "5px"}}>
                    <div className="dashboard-container" style={{height: "100%"}}>
                        <div className="dashboard-container-title">Stock Chart</div>
                    </div>
                    <div className="dashboard-fancy-container" style={{height: "100%"}}>
                        <div className="dashboard-container-title">Details</div>
                        <div style={{marginTop: "auto", marginBottom: "10px"}}>
                            <div className="dashboard-fancy-container-button">Purchase</div>
                            <div className="dashboard-fancy-container-button">Sell</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock;