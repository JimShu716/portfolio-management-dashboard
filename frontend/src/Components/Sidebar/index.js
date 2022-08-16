import {useContext, useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from 'react-router-dom';
import './styles.css';
import { FiTrendingUp, FiUser } from 'react-icons/fi';
import { MdMenuOpen, MdMenu } from 'react-icons/md';
import IconButton from "@mui/material/IconButton";
import SideBarOpenContext from "./SideBarContext"

const Sidebar = (props) =>{
    const [open, setOpen] = useContext(SideBarOpenContext);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            {open?
            <div className="sidebar">
                <div className="NavActionButton">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{fontSize: "20px"}}
                        onClick={handleDrawer}
                    >
                        <MdMenuOpen />
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
            </div>
                :
                null
            }
        </div>
    );
}

export default Sidebar;