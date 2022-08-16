import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";

const Stock = (props) =>{
    return (
        <div style={{display: "flex"}}>
            <Sidebar title="Trade" />
            <div>
                <Header />
                <div>??????</div>
            </div>
        </div>
    )
}

export default Stock;