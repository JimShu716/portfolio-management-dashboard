import axios from "axios";
import {useContext, useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import StockContext from "../../Components/Header/StockContext";

const Stock = (props) =>{
    const [stockSymbol, setStockSymbol] = useContext(StockContext);
    const [stockInfo, setStockInfo] = useState([]);
    const [stockData, setStockData] = useState([]);
    //
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_HOST + 'getStockInf/' + stockSymbol, ).then(r => {
    //         setStockInfo(r.data)
    //         console.log(r.data)
    //     })
    //     .catch(function (error) {setStockInfo(error)});
    //     axios.get(process.env.REACT_APP_HOST + 'getStockPriceForADate/' + stockSymbol + "/2022-01-04/" + "/2022-01-25", ).then(r => {
    //         setStockData(r.data)
    //         console.log(r.data)
    //     }).catch(function (error) {setStockInfo(error)});
    //     ;
    // }, [])

    return (
        <div style={{display: "flex"}}>
            <Sidebar title="Trade" />
            <div style={{flexGrow: 1}}>
                <Header />
                <div className="containers-container" style={{height: "calc(100vh - 100px)"}}>
                    <div className="dashboard-container" style={{height: "100%"}}>
                        <div className="dashboard-container-title">{stockSymbol}</div>
                        <div>{stockData}</div>
                    </div>
                    <div className="dashboard-fancy-container" style={{height: "100%"}}>
                        <div className="dashboard-container-title">Details</div>
                        <div>{stockInfo}</div>
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