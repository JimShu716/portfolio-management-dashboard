import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from 'react-router-dom';
import './styles.css';
import { FiTrendingUp, FiUser } from 'react-icons/fi';
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import {AppBar, IconButton, Toolbar} from "@mui/material";

const Header = (props) =>{
    const [open, setOpen] = useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Drawer
                variant="persistent"
                sx={{
                    width: 215,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { backgroundColor: "rgb(249, 250, 251)", width: 215, boxSizing: 'border-box', borderRight: '0px',},
                }}
                anchor="left"
                open={open}
                className="itemSidebar"
            >
                <div className="NavActionButton">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{fontSize: "20px"}}
                        onClick={handleDrawer}
                    >
                        {open?<AiOutlineMenuUnfold /> : null}
                    </IconButton>
                </div>
                <List className="sidebarList"
                      sx={{
                          marginTop: "10px",
                      }}>
                    <ListItem sx={{paddingLeft: '23px', paddingTop: 0, paddingRight: 0, paddingBottom: "13px"}} className="navbar-subtitle">Dashboard</ListItem>
                    <ListItem key={'Trade'} sx={{paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: "2px"}}>
                        <NavLink className={(navData) => (navData.isActive ? 'navBarLinkActive' : 'navBarLink')} to={'/trade'} end>
                            <div className="listItemButton">
                                <FiTrendingUp />
                                <span className="navBarLinkText">Trade</span>
                            </div>
                        </NavLink>
                    </ListItem>
                    <ListItem key={'User Profile'} sx={{paddingLeft: 0, paddingRight: 0}}>
                        <NavLink className={(navData) => (navData.isActive ? 'navBarLinkActive' : 'navBarLink')} to={'/user'} end>
                            <div className="listItemButton">
                                <FiUser />
                                <span className="navBarLinkText">User profile</span>
                            </div>
                        </NavLink>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default Header;