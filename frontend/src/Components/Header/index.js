import {useContext} from "react";
import {Link} from 'react-router-dom';
import './styles.css';
import SideBarOpenContext from "../Sidebar/SideBarContext";
import IconButton from "@mui/material/IconButton";
import { MdMenu, MdOutlineLogout, MdOutlineSearch } from 'react-icons/md';

const Header = (props) =>{
    const [open, setOpen] = useContext(SideBarOpenContext);
    const path = props.path;

    const handleDrawer = () => {
        setOpen(!open);
    };

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
                <div style={{fontSize: "15px"}}>
                    Dashboard / {path}
                </div>
            </div>
            <div>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{fontSize: "20px", marginRight: "15px"}}
                >
                    <MdOutlineSearch style={{paddingTop: "1px"}} />
                </IconButton>
                <Link style={{ textDecoration: 'none', color: 'rgba(58, 53, 65, 0.87)' }} to={'/'}>
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