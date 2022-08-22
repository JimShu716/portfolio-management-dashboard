import {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './styles.css';
import SideBarOpenContext from "../Sidebar/SideBarContext";
import IconButton from "@mui/material/IconButton";
import { MdMenu, MdOutlineLogout, MdOutlineSearch } from 'react-icons/md';
import Input from "@mui/material/Input";
import StockContext from "./StockContext";

const Header = (props) =>{
    const [open, setOpen] = useContext(SideBarOpenContext);
    const [searchBarInput, setSearchBarInput] = useState("");
    const [stockSymbol, setStockSymbol] = useContext(StockContext);

    const handleDrawer = () => {
        setOpen(!open);
    };

    const updateSearchBar = (event) => {
        setSearchBarInput(event.target.value);
    }

    function updateStockContext() {
        setStockSymbol(searchBarInput);
    }

    return(
        <div className="headerToolBar">
            <div style={{display: "flex", alignItems: "center"}}>
                {open?null:
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{fontSize: "20px", marginRight: "10px"}}
                            onClick={handleDrawer}
                        >
                            <MdMenu />
                        </IconButton>
                }
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{fontSize: "20px", marginRight: "5px"}}
                >
                    <MdOutlineSearch style={{paddingTop: "1px"}} />
                </IconButton>
                <Input placeholder="Search for symbols" sx={{
                    fontSize: "14px",
                    color: "rgba(58, 53, 65, 0.87)",
                    "& .MuiInput-input": {padding: 0,
                        color: "rgba(58, 53, 65, 0.87)"},
                    }} inputProps={{ 'aria-label': 'description' }} disableUnderline={true}
                       onChange={event => updateSearchBar(event)}
                       onKeyPress={event => {
                            if (event.key === 'Enter') {
                                updateStockContext();
                        }
                        }}/>
            </div>
            <div>
                <Link style={{ textDecoration: 'none', color: 'rgb(33, 43, 54)' }} to={'/'}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{fontSize: "20px"}}
                    >
                        <MdOutlineLogout />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Header;