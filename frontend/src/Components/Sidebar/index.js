import {useContext, useEffect, useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from 'react-router-dom';
import './styles.css';
import { FiTrendingUp, FiUser } from 'react-icons/fi';
import { MdMenuOpen, MdMenu } from 'react-icons/md';
import IconButton from "@mui/material/IconButton";
import SideBarOpenContext from "./SideBarContext";
import { AreaChart, Area } from 'recharts';

const Sidebar = (props) =>{
    const [open, setOpen] = useContext(SideBarOpenContext);
    const data = [{name: 'Page A', uv: 100}, {name: 'Page A', uv: 200},
        {name: 'Page A', uv: 140}, {name: 'Page A', uv: 230},
        {name: 'Page A', uv: 90}, {name: 'Page A', uv: 120},
        {name: 'Page A', uv: 50}, {name: 'Page A', uv: 300},
        {name: 'Page A', uv: 100}, {name: 'Page A', uv: 120},
        {name: 'Page A', uv: 140}, {name: 'Page A', uv: 150},
        {name: 'Page A', uv: 70}, {name: 'Page A', uv: 120}];

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            {open?
            <div className="sidebar">
                <div style={{paddingRight: "15px"}}>
                    <div className="NavActionButton">
                        <div className="sidebarTitle">Portfolio</div>
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
                                    <span className="navBarLinkText">User Profile</span>
                                </div>
                            </NavLink>
                        </ListItem>
                    </List>
                </div>
                <div style={{position: "absolute", bottom: 0}}>
                    <div className="sidebarGraphContainer">
                        {/*<AreaChart width={215} height={180}  margin={{ top: 0, left: 0, right: 0, bottom: 0 }} style={{paddingTop: "15px"}} data={data}>*/}
                        {/*    <defs>*/}
                        {/*        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">*/}
                        {/*            <stop offset="15%" stopColor="rgb(24, 144, 255)" stopOpacity={0.8}/>*/}
                        {/*            <stop offset="85%" stopColor="rgba(9,198,249,1)" stopOpacity={0}/>*/}
                        {/*        </linearGradient>*/}
                        {/*    </defs>*/}
                        {/*    <Area type="monotone" dataKey="uv" stroke="rgb(24, 144, 255)" fill="url(#colorUv)"  strokeWidth={1} dot={false} />*/}
                        {/*</AreaChart>*/}
                        <div className="sidebarGraphDescription"></div>
                    </div>
                </div>
            </div>
                :
                null
            }
        </div>
    );
}

export default Sidebar;