import axios from "axios";
import {useContext, useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import StockContext from "../../Components/Header/StockContext";
import Chart from 'react-google-charts';
import {Dialog} from "@mui/material";
import {GrFormClose} from "react-icons/gr";
import Input from "@mui/material/Input";
import {AiFillWarning} from "react-icons/ai";

const Stock = () =>{
    const [stockSymbol, ] = useContext(StockContext);
    const [stockInfo, setStockInfo] = useState([]);
    const [stockData, setStockData] = useState([]);
    const [stockInfoResult, setStockInfoResult] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [balance, setBalance] = useState([]);
    const [stockCurPrice, setStockCurPrice] = useState("167.74")
    const [stockTrend, setStockTrend] = useState()
    const [stockTrendPercent, setStockTrendPercent] = useState()
    const [color, setColor] = useState("#de5246")
    const [open, setOpen] = useState(false);
    const [shares, setShares] = useState(0.00);
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const userId = params.get('userId');
    const [errorOpen, setErrorOpen] = useState(false);
    const [apiStatus, setApiStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const [userHoldings, setUserHoldings] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updatePopupInput = (event) => {
        setShares(event.target.value);
    }


    async function sellStock() {

        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;

        axios.post(process.env.REACT_APP_HOST + 'addTradeHistory/', {
            "property": "sale",
            "purchasedPrice": stockCurPrice,
            "purchasedTime": dateTime,
            "purchasedQuantities": shares,
            "userID": userId,
            "stockSymbol": stockSymbol
        }).then(r => {
     
            console.log("sell log", r)
            axios.get(process.env.REACT_APP_HOST + userId,).then(r => {
                //     setStockData(r.data)

                const balance = r.data["balance"]
                setBalance(balance)

            }).catch(function (error) {
                console.log(error)
            });
            axios.get(process.env.REACT_APP_HOST + 'holdingSummaryPerStockUser/'+ userId +"/"+stockSymbol, ).then(r => {
                //     setStockData(r.data)
    
                   const userHoldings = (r.data["curPrice"])*(r.data["quantity"])
                   setUserHoldings(userHoldings)
    
                }).catch(function (error) {
                setApiStatus("fetching users' holdings")
                setErrorMessage(error.message)
                setErrorOpen(true)
            });

            setOpen(false); //close the dialog
        }).catch(function (error) {
            console.log(error)
        });
    }

    function handleErrorClose() {
        setErrorOpen(false);
    }


    async function buyStock(){
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

         axios.post(process.env.REACT_APP_HOST + 'addTradeHistory/',{
            "property" : "buy",
            "purchasedPrice" :stockCurPrice,
            "purchasedTime" : dateTime,
            "purchasedQuantities" : shares,
            "userID" : userId,
            "stockSymbol" : stockSymbol
        } ).then(r => {

            axios.get(process.env.REACT_APP_HOST + userId, ).then(r => {
                //     setStockData(r.data)

                   const balance = r.data["balance"]
                   setBalance(balance)

                }).catch(function (error) {console.log(error)});

            console.log("buy log",r)
            axios.get(process.env.REACT_APP_HOST + 'holdingSummaryPerStockUser/'+ userId +"/"+stockSymbol, ).then(r => {
                //     setStockData(r.data)
    
                   const userHoldings = (r.data["curPrice"])*(r.data["quantity"])
                   setUserHoldings(userHoldings)
    
                }).catch(function (error) {
                setApiStatus("fetching users' holdings")
                setErrorMessage(error.message)
                setErrorOpen(true)
            });
            
            setOpen(false); //close the dialog

         }).catch(function (error) {console.log(error)});
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1)
    const date2 = tomorrow.toLocaleDateString('en-CA');
    tomorrow.setMonth(tomorrow.getMonth() - 1);
    const date1 = tomorrow.toLocaleDateString('en-CA');

    let dateList = [];
    const curDate = new Date(date1);
    while (curDate < new Date(date2)) {
        const dayOfWeek = curDate.getDay();
        if(dayOfWeek !== 0 && dayOfWeek !== 6) {
            dateList.push(new Date(curDate));
        }
        curDate.setDate(curDate.getDate() + 1);
    }

    useEffect(()=>{
        console.log(stockSymbol)
        axios.get(process.env.REACT_APP_HOST + 'getStockInfo/' + stockSymbol, ).then(r => {
            //setStockInfo([r.data])
            const stockInfoResult =r.data

            const s = [{
                company: r.data.data["shortName"],
                currency:r.data.data["currency"],
                dayHigh: r.data.data["dayHigh"],
                dayLow: r.data.data["dayLow"],
                exchangeInfo: r.data.data["exchange"],
                industry: r.data.data["industry"],
                volume: r.data.data["volume"],
                open: r.data.data["open"],
                previousClose: r.data.data["previousClose"],
                averageVolume: r.data.data["averageVolume"],
                sector: r.data.data["sector"],
            }]
            console.log(s)
            setStockInfo(s)

        })
        .catch(function (error) {
            setApiStatus("fetching stock information from the database")
            setErrorMessage(error.message)
            setErrorOpen(true)
        });


        axios.get(process.env.REACT_APP_HOST + 'getStockPriceForADates/' + stockSymbol + "/" + date1 + "/" + date2 + "/", ).then(r => {
        //     setStockData(r.data)

            const chartData = r.data
            setStockCurPrice(chartData.slice(-1)[0].toFixed(2));
            console.log(chartData.slice(-1))
            let stockDataArray = [["date", "Trade prices"]];
            for(let i = 0; i<dateList.length; i++){
                stockDataArray.push([dateList[i],chartData[i]]);
            }

            console.log(chartData.slice(-2)[0])
            console.log(chartData.slice(-1)[0])
            let x = (chartData.slice(-1)[0] - chartData.slice(-2)[0]).toFixed(2);
            let y = ((x/chartData.slice(-1)[0]) * 100).toFixed(2);
            if(x >= 0){
                setColor("#1aa260");
            }else{
                setColor("#de5246");
            }

            setStockTrendPercent(y);
            setStockTrend(x);
            console.log(x)

            // stockDataArray.push([new Date(), 167.74])

            setStockData(stockDataArray)

        }).catch(function (error) {
            setApiStatus("fetching stock chart data from yFinance API")
            setErrorMessage(error.message)
            setErrorOpen(true)
        });


        axios.get(process.env.REACT_APP_HOST + userId, ).then(r => {
            //     setStockData(r.data)

               const balance = r.data["balance"]
               setBalance(balance)

            }).catch(function (error) {
            setApiStatus("fetching users' balance")
            setErrorMessage(error.message)
            setErrorOpen(true)
        });
        axios.get(process.env.REACT_APP_HOST + 'holdingSummaryPerStockUser/'+ userId +"/"+stockSymbol, ).then(r => {
            //     setStockData(r.data)

               const userHoldings = (r.data["curPrice"])*(r.data["quantity"])
               setUserHoldings(userHoldings)

            }).catch(function (error) {

                setUserHoldings(0.00)
        });


     }, [stockSymbol])




    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar title="Trade" />
                <div style={{flexGrow: 1}}>
                    <Header />
                    <div className="containers-container" style={{height: "calc(100vh - 100px)"}}>
                        <div className="dashboard-container" style={{height: "100%"}}>
                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <div>
                                    <div className="dashboard-container-title">
                                        {stockInfo[0] && stockInfo[0].company?(
                                            <span>{stockInfo[0].company} (</span>
                                        ):null}{stockSymbol}
                                        {stockInfo[0] && stockInfo[0].company?(
                                            <span>)</span>
                                        ):null}
                                    </div>
                                    {stockCurPrice?(
                                        <div className="dashboard-container-title" style={{paddingTop: "8px", paddingBottom: "8px"}}>
                                            $ {stockCurPrice}
                                        </div>
                                    ):null}
                                </div>
                                {stockTrend && stockTrendPercent?(
                                    <div className="dashboard-container-title" style={{color: color}}>
                                        {stockTrend} ({stockTrendPercent}%)
                                    </div>):null
                                }
                            </div>
                            <div className="chart-container">
                                <Chart
                                    style={{
                                        marginBottom: 0,
                                        marginTop: "auto"
                                    }}
                                    height="calc(100vh - 190px)"
                                    chartType="AreaChart"
                                    data={stockData}
                                    options={{
                                        colors: [color],
                                        legend: {position: 'none'},
                                        chartArea: {
                                            height: '100%',
                                            width: '100%',
                                            top: 16,
                                            left: 0,
                                            right: 8,
                                            bottom: 48,
                                        },
                                        hAxis: {
                                            gridlines: {
                                                count: 5,
                                                color: 'transparent'
                                            },
                                            format: 'MMM d',
                                        },
                                        vAxis: {
                                            textPosition: 'in',
                                            gridlines: {
                                                count: 5,
                                                color: 'rgb(242, 244, 243)'
                                            }},
                                        }}
                                />
                            </div>
                        </div>
                        <div style={{height: "calc(100vh - 100px)", flexGrow: 1}}>
                            <div className="dashboard-fancy-container" style={{height: "43%"}}>
                                <div className="dashboard-container-title">Holdings</div>
                                <div className="dashboard-container-title" style={{marginTop: "2px"}}>$ {userHoldings}</div>
                                <div className="dashboard-container-title" style={{marginTop: "6px"}}>Cash</div>
                                <div className="dashboard-container-title" style={{marginTop: "2px"}}>$ {balance}</div>
                                <div style={{marginTop: "auto", marginBottom: "10px"}}>
                                    <a onClick={handleClickOpen} className="dashboard-fancy-container-button">Trade</a>
                                </div>
                            </div>
                            <div className="dashboard-container" style={{height: "48%"}}>
                                <div className="dashboard-container-title" style={{marginBottom: "2px"}}>Summary</div>
                                {stockInfo[0] && stockInfo[0].sector?
                                    <div className="stock-info">
                                        <div className="stock-info-title">Sector</div><div>{stockInfo[0].sector}</div>
                                    </div>:null
                                }
                                {stockInfo[0] && stockInfo[0].previousClose?
                                    <div className="stock-info">
                                       <div className="stock-info-title">Previous Close</div><div> {stockInfo[0].previousClose}</div>
                                    </div>:null
                                }
                                {stockInfo[0] && stockInfo[0].open?
                                    <div className="stock-info">
                                        <div className="stock-info-title">Open</div><div>{stockInfo[0].open}</div>
                                    </div>:null
                                }
                                {stockInfo[0] && stockInfo[0].volume?
                                    <div className="stock-info">
                                        <div className="stock-info-title">Volume</div><div>{stockInfo[0].volume}</div>
                                    </div>:null
                                }
                                {stockInfo[0] && stockInfo[0].averageVolume?
                                    <div className="stock-info">
                                        <div className="stock-info-title">Avg. Volume</div><div>{stockInfo[0].averageVolume}</div>
                                    </div>:null
                                }
                                {stockInfo[0] && stockInfo[0].dayHigh && stockInfo[0].dayLow?
                                    <div className="stock-info">
                                        <div className="stock-info-title">Day's Range</div><div>{stockInfo[0].dayLow} - {stockInfo[0].dayHigh}</div>
                                    </div>:null
                                }
                                {stockInfo[0] && stockInfo[0].exchangeInfo?
                                    <div className="stock-info">
                                        <div className="stock-info-title">Exchange</div><div>{stockInfo[0].exchangeInfo}</div>
                                    </div>:null
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                width="400px"
                aria-describedby="alert-dialog-description"
                sx={{"& .MuiBackdrop-root":{backgroundColor:"rgba(0, 0, 0, 0.2)"}}}
            >
                <a href="#" onClick={handleClose} style={{textDecoration:"none", display: "flex", justifyContent:"space-between"}}><div /><GrFormClose style={{paddingRight: "25px", paddingTop: "25px", fontSize: "20px", cursor:"pointer"}} /></a>
                <div className="dashboard-container" style={{marginRight: "20px", paddingTop: "5px"}}>
                    <div className="dashboard-container-title">
                        Market Order
                    </div>
                    <div className="dashboard-container-title" style={{marginTop:"20px", marginBottom:"20px", display:"flex", justifyContent:"space-between"}}>
                        <Input placeholder="How many shares do you want to trade?" sx={{
                            width: 400,
                            fontSize: "22px",
                            color: "rgba(58, 53, 65, 0.87)",
                            "& .MuiInput-input": {padding: 0,
                                color: "#1f1c2e"},
                        }} inputProps={{ 'aria-label': 'description' }} disableUnderline={true}
                               onChange={event => updatePopupInput(event)}/>
                    </div>
                    <div>
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom: "10px", fontWeight: 600}}>
                            <div style={{color: "gray"}}>
                                {stockSymbol} Price
                            </div>
                            <div>
                            $ {stockCurPrice}
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom: "10px", fontWeight: 600}}>
                            <div style={{color: "gray"}}>
                                Estimated Amount
                            </div>
                            <div>
                                $ {(stockCurPrice * shares).toFixed(2)}
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom: "30px", fontWeight: 600}}>
                            <div style={{color: "gray"}}>
                                Current Cash
                            </div>
                            <div>
                                $ {balance}
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", paddingBottom: "10px", flexDirection:"row-reverse"}}>
                        <a href="#" id="sell-button" onClick={sellStock}>Sell</a>
                        <a href="#" id="buy-button" onClick={buyStock}>Buy</a>
                    </div>
                </div>
            </Dialog>
            <Dialog open={errorOpen} sx={{backgroundColor: "transparent", "& .MuiDialog-container .MuiPaper-root":{boxShadow:"none"}, "& .MuiBackdrop-root":{backgroundColor:"rgba(0, 0, 0, 0.2)"}}}>
                <div style={{width:"300px", marginRight:"15px"}}>
                    <a href="#" onClick={handleErrorClose} style={{textDecoration:"none", display: "flex", justifyContent:"space-between"}}><div /><GrFormClose style={{paddingRight: "25px", paddingTop: "25px", fontSize: "20px", cursor:"pointer"}} /></a>
                    <div className="dashboard-container" style={{textAlign:"center", paddingTop:"12px", paddingBottom:"20px"}}>
                        <AiFillWarning style={{marginLeft: "auto", marginRight:"auto", marginBottom:"12px", fontSize:"45px", color:"rgb(211, 92, 69)"}} />
                        <div style={{fontWeight:"600", fontSize:"20px", marginBottom:"12px", color:"rgb(211, 92, 69)"}}>ERROR</div>
                        <div>A problem has been occurred while {apiStatus}: {errorMessage}.</div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Stock;