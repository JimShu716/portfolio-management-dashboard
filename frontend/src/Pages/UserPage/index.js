import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';

const User = (props) =>{
    const [response, setResponse] = useState("");

    useEffect(()=>{
        axios.get(process.env.REACT_APP_HOST + '/1', ).then(r => {
            console.log(r)
        });
    }, [])

    return (
        <div>
            <div className="title">hello</div>
        </div>
    )
}

export default User;