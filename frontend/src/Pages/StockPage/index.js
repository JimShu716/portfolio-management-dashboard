import axios from "axios";
import {useContext, useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import StockContext from "../../Components/Header/StockContext";
import Chart from 'react-google-charts';

// dummy data
const r = {
    "data": {
        "52WeekChange": null,
        "SandP52WeekChange": null,
        "address1": "One Apple Park Way",
        "algorithm": null,
        "annualHoldingsTurnover": null,
        "annualReportExpenseRatio": null,
        "ask": 169.05,
        "askSize": 900,
        "averageDailyVolume10Day": 64119090,
        "averageVolume": 76763275,
        "averageVolume10days": 64119090,
        "beta": 1.19455,
        "beta3Year": null,
        "bid": 169.02,
        "bidSize": 800,
        "bookValue": 4.146,
        "category": null,
        "circulatingSupply": null,
        "city": "Cupertino",
        "companyOfficers": [],
        "country": "United States",
        "currency": "USD",
        "currentPrice": 168.965,
        "currentRatio": 0.865,
        "dateShortInterest": 1657843200,
        "dayHigh": 169.86,
        "dayLow": 168.61,
        "debtToEquity": 205.984,
        "dividendRate": 0.92,
        "dividendYield": 0.0057,
        "earningsGrowth": -0.077,
        "earningsQuarterlyGrowth": -0.106,
        "ebitda": 129556996096,
        "ebitdaMargins": 0.3343,
        "enterpriseToEbitda": 20.71,
        "enterpriseToRevenue": 6.923,
        "enterpriseValue": 2683118026752,
        "exDividendDate": 1659657600,
        "exchange": "NMS",
        "exchangeTimezoneName": "America/New_York",
        "exchangeTimezoneShortName": "EDT",
        "expireDate": null,
        "fiftyDayAverage": 151.3188,
        "fiftyTwoWeekHigh": 182.94,
        "fiftyTwoWeekLow": 129.04,
        "financialCurrency": "USD",
        "fiveYearAverageReturn": null,
        "fiveYearAvgDividendYield": 1.05,
        "floatShares": 16054038418,
        "forwardEps": 5.31,
        "forwardPE": 31.82015,
        "freeCashflow": 83344621568,
        "fromCurrency": null,
        "fullTimeEmployees": 154000,
        "fundFamily": null,
        "fundInceptionDate": null,
        "gmtOffSetMilliseconds": "-14400000",
        "grossMargins": 0.43313998,
        "grossProfits": 152836000000,
        "headSymbol": null,
        "heldPercentInsiders": 0.00071999995,
        "heldPercentInstitutions": 0.60082,
        "industry": "Consumer Electronics",
        "isEsgPopulated": true,
        "lastCapGain": null,
        "lastDividendValue": null,
        "lastFiscalYearEnd": 1632528000,
        "lastMarket": null,
        "lastSplitDate": 1598832000,
        "lastSplitFactor": "4:1",
        "legalType": null,
        "logo_url": "https://logo.clearbit.com/apple.com",
        "longBusinessSummary": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.",
        "longName": "Apple Inc.",
        "market": "us_market",
        "marketCap": 2772107264000,
        "maxAge": 1,
        "maxSupply": null,
        "messageBoardId": "finmb_24937",
        "morningStarOverallRating": null,
        "morningStarRiskRating": null,
        "mostRecentQuarter": 1656115200,
        "navPrice": null,
        "netIncomeToCommon": 99632996352,
        "nextFiscalYearEnd": 1695600000,
        "numberOfAnalystOpinions": 44,
        "open": 169.69,
        "openInterest": null,
        "operatingCashflow": 118224003072,
        "operatingMargins": 0.30533,
        "payoutRatio": 0.1471,
        "pegRatio": 2.59,
        "phone": "408 996 1010",
        "preMarketPrice": 169.59,
        "previousClose": 171.52,
        "priceHint": 2,
        "priceToBook": 40.75374,
        "priceToSalesTrailing12Months": 7.15305,
        "profitMargins": 0.25709,
        "quickRatio": 0.697,
        "quoteType": "EQUITY",
        "recommendationKey": "buy",
        "recommendationMean": 1.9,
        "regularMarketDayHigh": 169.86,
        "regularMarketDayLow": 168.61,
        "regularMarketOpen": 169.69,
        "regularMarketPreviousClose": 171.52,
        "regularMarketPrice": 168.965,
        "regularMarketVolume": 9465832,
        "returnOnAssets": 0.22204,
        "returnOnEquity": 1.62816,
        "revenueGrowth": 0.019,
        "revenuePerShare": 23.732,
        "revenueQuarterlyGrowth": null,
        "sector": "Technology",
        "sharesOutstanding": 16406400000,
        "sharesPercentSharesOut": 0.0064999997,
        "sharesShort": 104993162,
        "sharesShortPreviousMonthDate": 1655251200,
        "sharesShortPriorMonth": 120066688,
        "shortName": "Apple Inc.",
        "shortPercentOfFloat": 0.0064999997,
        "shortRatio": 1.32,
        "startDate": null,
        "state": "CA",
        "strikePrice": null,
        "symbol": "AAPL",
        "targetHighPrice": 214,
        "targetLowPrice": 130,
        "targetMeanPrice": 181.87,
        "targetMedianPrice": 185,
        "threeYearAverageReturn": null,
        "totalAssets": null,
        "totalCash": 48230998016,
        "totalCashPerShare": 3.001,
        "totalDebt": 119691001856,
        "totalRevenue": 387541991424,
        "tradeable": false,
        "trailingAnnualDividendRate": 0.82,
        "trailingAnnualDividendYield": 0.0047807833,
        "trailingEps": 4.449,
        "trailingPE": 37.9782,
        "twoHundredDayAverage": 160.461,
        "underlyingExchangeSymbol": null,
        "underlyingSymbol": null,
        "uuid": "8b10e4ae-9eeb-3684-921a-9ab27e4d87aa",
        "volume": 9465832,
        "volume24Hr": null,
        "volumeAllCurrencies": null,
        "website": "https://www.apple.com",
        "yield": null,
        "ytdReturn": null,
        "zip": "95014"
    },
    "message": "Success",
    "status": 200
}

const chartData = [
    153.8762512207,
    152.7378387451,
    151.3897247314,
    156.5725097656,
    157.1317443848,
    162.284576416,
    161.2859649658,
    159.7880401611,
    165.8995666504,
    165.5800018311,
    165.3500061035,
    164.8699951172,
    164.9199981689,
    169.2400054932,
    168.4900054932,
    172.1000061035,
    173.1900024414,
    173.0299987793,
    174.5500030518,
    174.1499938965,
    171.5200042725
]

const Stock = (props) =>{
    const [stockSymbol, setStockSymbol] = useContext(StockContext);
    const [stockInfo, setStockInfo] = useState([]);
    const [stockData, setStockData] = useState([]);
    const [stockCurPrice, setStockCurPrice] = useState("167.74")
    const [stockTrend, setStockTrend] = useState()
    const [stockTrendPercent, setStockTrendPercent] = useState()
    const [color, setColor] = useState("#de5246")

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
        const s = [{
            company: r.data["shortName"],
            currency: r.data["currency"],
            dayHigh: r.data["dayHigh"],
            dayLow: r.data["dayLow"],
            exchangeInfo: r.data["exchange"],
            industry: r.data["industry"],
            volume: r.data["volume"],
            open: r.data["open"],
            previousClose: r.data["previousClose"],
            averageVolume: r.data["averageVolume"],
            sector: r.data["sector"],
        }]

        setStockInfo(s)

        let stockDataArray = [["date", "Trade prices"]];
        for(let i = 0; i<dateList.length; i++){
            stockDataArray.push([dateList[i],chartData[i]])
            if(i === dateList.length-1){
                let x = (stockCurPrice - chartData[i]).toFixed(2)
                let y = ((x/stockCurPrice) * 100).toFixed(2)

                if(x >= 0){
                    setColor("#1aa260")
                }else{
                    setColor("#de5246")
                }
                setStockTrendPercent(y)
                setStockTrend(x)
            }
        }

        stockDataArray.push([new Date(), 167.74])


        console.log(stockDataArray)

        setStockData(stockDataArray)

    }, [])
    //
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_HOST + 'getStockInfo/' + stockSymbol, ).then(r => {
    //         setStockInfo([r.data])
    //         console.log(r.data)
    //     })
    //     .catch(function (error) {setStockInfo(error)});
    //     // axios.get(process.env.REACT_APP_HOST + 'getStockPriceForADate/' + stockSymbol + "/" + date1 + "/" + date2 + "/", ).then(r => {
    //     //     setStockData(r.data)
    //     //     console.log(r.data)
    //     // }).catch(function (error) {setStockInfo(error)});
    // }, [])

    return (
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
                                className="analysis-chart"
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
                                        explorer: {
                                            axis: 'horizontal',
                                            maxZoomOut: 1,
                                            keepInBounds: true,
                                            actions: ['dragToZoom', 'rightClickToReset']
                                        },
                                    }}
                            />
                        </div>
                    </div>
                    <div style={{height: "calc(100vh - 100px)", flexGrow: 1}}>
                        <div className="dashboard-fancy-container" style={{height: "43%"}}>
                            <div className="dashboard-container-title">Holdings</div>
                            <div className="dashboard-container-title" style={{fontSize: "32px", marginTop: "8px"}}>$0.00</div>
                            <div style={{marginTop: "auto", marginBottom: "10px"}}>
                                <div className="dashboard-fancy-container-button">Trade</div>
                            </div>
                        </div>
                        <div className="dashboard-container" style={{height: "47%"}}>
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
    )
}

export default Stock;