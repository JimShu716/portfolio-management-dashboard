import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
import Header from "../../Components/Header";

const Stock = (props) =>{
    return (
        <div style={{display: "flex"}}>
            <Header title="Trade" />
        </div>
    )
}

export default Stock;