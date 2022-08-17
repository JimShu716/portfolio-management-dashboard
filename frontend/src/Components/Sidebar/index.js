import {useContext, useEffect, useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from 'react-router-dom';
import './styles.css';
import { FaUser, FaChartArea } from 'react-icons/fa';
import { MdMenuOpen } from 'react-icons/md';
import IconButton from "@mui/material/IconButton";
import SideBarOpenContext from "./SideBarContext";
import sun from './../../Assets/cloudy.png';
import moon from './../../Assets/moon.png'

const Sidebar = () =>{
    const [open, setOpen] = useContext(SideBarOpenContext);
    const [time, setTime] = useState("");
    const [isMarketsOpen, setIsMarketsOpen] = useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    useEffect(()=>{
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const today = new Date();
        const currentTime = weekday[today.getDay()] + " " + today.getHours() + ":" + today.getMinutes()
        if(today.getDay()%6 === 0 && today.getHours() < 9 && today.getHours() > 17){
            setIsMarketsOpen(false);
        }else{
            setIsMarketsOpen(true);
        }
        setTime(currentTime)
    },[])

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 850){
                setOpen(false);
            } else {
                setOpen(true);
            }
        }

        window.addEventListener('resize', handleResize)
    })

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
                                    <FaChartArea className="listItemButtonIcon" />
                                    <span className="navBarLinkText">Trade</span>
                                </div>
                            </NavLink>
                        </ListItem>
                        <ListItem key={'User Profile'} sx={{paddingLeft: 0, paddingRight: 0}}>
                            <NavLink className={(navData) => (navData.isActive ? 'navBarLinkActive' : 'navBarLink')} to={'/user'} end>
                                <div className="listItemButton">
                                    <FaUser className="listItemButtonIcon" />
                                    <span className="navBarLinkText">User Profile</span>
                                </div>
                            </NavLink>
                        </ListItem>
                    </List>
                </div>
                <div style={{position: "absolute", bottom: 0}}>
                    <div className="sidebarGraphContainer">
                        {isMarketsOpen?
                        <div>
                            <img src={sun} width={80} style={{marginLeft: "15px", marginTop: "15px"}} alt={sun}/>
                            <div style={{color: "white", marginLeft: "15px"}}>
                                <div>{time}</div>
                                <div>Stock Markets</div>
                                <div>Open</div>
                            </div>
                        </div>:
                        <div>
                            <img src={moon} width={80} style={{marginLeft: "15px", marginTop: "15px"}} alt={moon}/>
                            <div style={{color: "white", marginLeft: "15px"}}>
                                <div>{time}</div>
                                <div>Stock Markets</div>
                                <div>Closed</div>
                            </div>
                        </div>}
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