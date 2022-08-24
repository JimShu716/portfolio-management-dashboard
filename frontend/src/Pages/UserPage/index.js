import axios from "axios";
import {useEffect, useState} from "react";
import './styles.css';
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import {
    Dialog,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import { HiCheckCircle } from "react-icons/hi";
import Input from "@mui/material/Input";
import {SiVisa} from "react-icons/si";
import {GrFormClose} from "react-icons/gr";
import {AiFillWarning} from "react-icons/ai";

const User = () =>{
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [rows, setRows] = useState([])
    const [holdingsSummaryPage, setHoldingsSummaryPage] = useState(0);
    const [holdingsSummaryRowsPerPage, setHoldingsSummaryRowsPerPage] = useState(3);
    const [holdingsSummaryRows, setHoldingsSummaryRows] = useState([])
    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [apiStatus, setApiStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [addWithdrawBalance, setAddWithdrawBalance] = useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleHoldingsSummaryChangePage = (event, newPage) => {
        setHoldingsSummaryPage(newPage);
    };

    const handleHoldingsSummaryChangeRowsPerPage = (event) => {
        setHoldingsSummaryRowsPerPage(+event.target.value);
        setHoldingsSummaryPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const updatePopupInput = (event) => {
        setAddWithdrawBalance(event.target.value);
    }

    async function addBalance(){
        // input: addWithdrawBalance
        console.log(addWithdrawBalance)
    }

    async function withdrawBalance(){
        // input: addWithdrawBalance
        console.log(addWithdrawBalance)
    }

    function handleErrorClose() {
        setErrorOpen(false);
    }

    useEffect(()=>{
        // get data from backend
        axios.get(process.env.REACT_APP_HOST + '1', ).then(r => {
            console.log(r)
        }).catch(function (error) {
            setApiStatus("fetching user information from the database")
            setErrorMessage(error.message)
            setErrorOpen(true)
        })
    }, [])

    const columns = [  { id: 'id', label: 'ID'},
        { id: 'symbol', label: 'Symbol'},
        { id: 'shares', label: 'Shares'},
        { id: 'price', label: 'Price'},
        { id: 'orderAmount', label: 'Order Amount' },
        { id: 'time', label: 'Time' },
        { id: 'action', label: 'Action' },
    ]

    const holdingsSummaryColumns = [
        { id: 'symbol', label: 'Symbol'},
        { id: 'quantity', label: 'Quantity'},
        { id: 'totalCost', label: 'Total Cost'},
        { id: 'price', label: 'Current Price' },
        { id: 'marketValue', label: 'Market Value' },
        { id: 'earnings', label: 'Earnings' },
    ]

    const rowsData = [{
        id: 1,
        symbol: "AAPL",
        shares: 12,
        price: 3.4,
        orderAmount: 40.8,
        time: "Aug 23, 2022 09:43 AM",
        action: "Sell"
    },{
        id: 2,
        symbol: "AAPL",
        shares: 12,
        price: 3.4,
        orderAmount: 40.8,
        time: "Aug 23, 2022 09:43 AM",
        action: "Sell"
    },{
        id: 3,
        symbol: "AAPL",
        shares: 12,
        price: 3.4,
        orderAmount: 40.8,
        time: "Aug 23, 2022 09:43 AM",
        action: "Sell"
    },{
        id: 4,
        symbol: "AAPL",
        shares: 12,
        price: 3.4,
        orderAmount: 40.8,
        time: "Aug 23, 2022 09:43 AM",
        action: "Sell"
    }]

    const holdingsSummaryRowsData = [{
        symbol: "AAPL",
        quantity: 400,
        totalCost: 1200,
        price: 3.4,
        marketValue: 1360,
        earnings: 160
    },
        {
            symbol: "AMZN",
            quantity: 400,
            totalCost: 1200,
            price: 3.4,
            marketValue: 1360,
            earnings: 160
        },
        {
            symbol: "GOOG",
            quantity: 400,
            totalCost: 1200,
            price: 3.4,
            marketValue: 1360,
            earnings: 160
        },
        {
            symbol: "MSFT",
            quantity: 400,
            totalCost: 1200,
            price: 3.4,
            marketValue: 1360,
            earnings: 160
        }]


    useEffect(()=>{
        setRows(rowsData)
        setHoldingsSummaryRows(holdingsSummaryRowsData)
    },[])

    return (
        <div>
            <div style={{display: "flex"}}>
            <Sidebar title="User Profile" />
            <div style={{flexGrow: 1}}>
                <Header />
                <div style={{height:"calc(100vh - 56px)"}}>
                    <div className="containers-container" style={{height: "50%"}}>
                        <div className="dashboard-container" style={{paddingTop: "15px"}}>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                <div className="dashboard-container-title">Holdings Summary</div>
                                <TablePagination
                                    sx={{fontFamily: "'DM Sans'"}}
                                    rowsPerPageOptions={[]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={holdingsSummaryRowsPerPage}
                                    page={holdingsSummaryPage}
                                    onPageChange={handleHoldingsSummaryChangePage}
                                    onRowsPerPageChange={handleHoldingsSummaryChangeRowsPerPage}
                                />
                            </div>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {holdingsSummaryColumns.map((column) => (
                                                <TableCell
                                                    sx={{paddingLeft: "2px", paddingTop: "5px", paddingBottom: "10px", borderBottom:"none", paddingRight: "25px", fontFamily:"'DM Sans'", color:"gray", fontWeight: "600"}}
                                                    key={column.id}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {holdingsSummaryRows.slice(holdingsSummaryPage * holdingsSummaryRowsPerPage, holdingsSummaryPage * holdingsSummaryRowsPerPage + holdingsSummaryRowsPerPage).map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.symbol}>{holdingsSummaryColumns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell sx={{paddingLeft: "2px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "25px", fontWeight:"600", borderBottom: "none", borderTop:"1px solid rgb(226, 231, 236)", fontFamily:"'DM Sans'"}}
                                                                   key={column.id} >{value}</TableCell>
                                                    );
                                                })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="dashboard-fancy-container">
                            <div className="dashboard-container-title">Balance</div>
                            <div className="dashboard-container-title" style={{fontSize: "32px", marginTop: "8px"}}>$200,000</div>
                            <a href="#" onClick={handleClickOpen} className="dashboard-fancy-container-button" style={{textDecoration:"none", marginBottom: "25px", marginTop: "auto"}}>Transfer Money</a>
                        </div>
                    </div>
                    <div className="containers-container" style={{height: "50%"}}>
                        <div className="dashboard-container" style={{paddingTop: "20px"}}>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                <div className="dashboard-container-title">Trade History</div>
                                <TablePagination
                                    sx={{fontFamily: "'DM Sans'"}}
                                    rowsPerPageOptions={[3, 6, 10]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </div>
                            <div>
                                <TableContainer>
                                    <Table aria-label="trade history table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        sx={{paddingLeft: "2px", paddingTop: "5px", paddingBottom: "10px", borderBottom:"none", paddingRight: "25px", fontFamily:"'DM Sans'", color:"gray", fontWeight: "600"}}
                                                        key={column.id}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                                <TableCell
                                                    sx={{paddingLeft: "2px", paddingTop: "5px", paddingBottom: "10px", borderBottom:"none", paddingRight: "25px", fontFamily:"'DM Sans'", color:"gray", fontWeight: "600"}}
                                                    key={"Status"} align="center"
                                                >
                                                    Status
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>{columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell sx={{paddingLeft: "2px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "25px", fontWeight:"600", borderBottom: "none", borderTop:"1px solid rgb(226, 231, 236)", fontFamily:"'DM Sans'"}}
                                                                           key={column.id} >{value}</TableCell>
                                                            );
                                                        })}
                                                        <TableCell sx={{paddingLeft: "2px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "25px", fontWeight:"600", borderBottom: "none", borderTop:"1px solid rgb(226, 231, 236)", fontFamily:"'DM Sans'"}}
                                                                   key={"status"} align="center">
                                                            <div style={{display:"flex", alignItems:"flex-end", justifyContent:"center"}}>
                                                                <HiCheckCircle style={{fontSize: "18px", paddingTop: "2px", color: "#1aa260"}} />
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{"& .MuiBackdrop-root":{backgroundColor:"rgba(0, 0, 0, 0.2)"}}}
            >
                <a href="#" onClick={handleClose} style={{textDecoration:"none", display: "flex", justifyContent:"space-between"}}><div /><GrFormClose style={{paddingRight: "25px", paddingTop: "25px", fontSize: "20px", cursor:"pointer"}} /></a>
                <div className="dashboard-container" style={{marginRight: "20px", paddingTop: "5px"}}>
                    <div className="dashboard-container-title">
                        Transfer Money
                    </div>
                    <div className="creditCard">
                        <div style={{display:"flex", flexDirection:"column", height:"100%", justifyContent:"space-between"}}>
                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <div />
                                <div><SiVisa style={{fontSize: "40px"}} /></div>
                            </div>
                            <div>1234 **** **** 5678</div>
                            <div style={{display: "flex", justifyContent:"space-between", paddingTop: "10px"}}>
                                <div>Name</div>
                                <div>08/23</div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-container-title" style={{marginTop:"20px", marginBottom:"20px"}}>
                        $&nbsp;
                        <Input placeholder="0.00" sx={{
                            fontSize: "22px",
                            color: "rgba(58, 53, 65, 0.87)",
                            "& .MuiInput-input": {padding: 0,
                                color: "#1f1c2e"},
                        }} inputProps={{ 'aria-label': 'description' }} disableUnderline={true}
                               onChange={event => updatePopupInput(event)}/>
                    </div>
                    <div style={{display: "flex", paddingBottom: "15px"}}>
                        <a href="#" onClick={addBalance} className="dashboard-fancy-container-button" style={{textDecoration:"none",width: "48%", marginRight: "2%"}}>Add</a>
                        <a href="#" onClick={withdrawBalance} className="dashboard-fancy-container-button" style={{textDecoration:"none",width: "48%", marginLeft: "2%"}}>Withdraw</a>
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

export default User;