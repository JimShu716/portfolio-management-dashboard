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
                <div>??????</div>
            </div>
        </div>
    )
}

export default Stock;