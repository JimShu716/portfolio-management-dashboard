import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";

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
            </div>
        </div>
    )
}

export default User;