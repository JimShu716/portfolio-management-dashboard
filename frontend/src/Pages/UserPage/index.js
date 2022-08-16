import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
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
            <Header title="User Profile" />
        </div>
    )
}

export default User;