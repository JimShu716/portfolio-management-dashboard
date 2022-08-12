import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link } from 'react-router-dom';
import './styles.css';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";

const Header = (props) =>{
    const [open, setOpen] = useState(true);
    const title = props.title;

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" className="appbar" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawer}
                    >
                        {open?<MenuOpenIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Link className="navBarLink" to={'/'} ><Button>Logout</Button></Link>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent"
                    sx={{
                        width: 60,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 60, boxSizing: 'border-box' },
                    }}
                    className="iconSidebar" open={!open}>
                <List className="sidebarList">
                    <ListItem key={'Trade'} disablePadding>
                        <Link className="navBarLink" to={'/Trade'} >
                            <ListItemButton>
                                <ShowChartIcon />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key={'User Profile'} disablePadding>
                        <Link className="navBarLink" to={'/User'} >
                            <ListItemButton>
                                <PersonIcon />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <Drawer
                variant="persistent"
                sx={{
                    width: 125,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 125, boxSizing: 'border-box' },
                }}
                anchor="left"
                open={open}
                className="itemSidebar"
            >
                <List className="sidebarList">
                    <ListItem key={'Trade'} disablePadding>
                        <Link className="navBarLink" to={'/Trade'} >
                            <ListItemButton>
                                <ShowChartIcon />
                                <span className="navBarLinkText">Trade</span>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key={'User Profile'} disablePadding>
                        <Link className="navBarLink" to={'/User'} >
                            <ListItemButton>
                                <PersonIcon />
                                <span className="navBarLinkText">Profile</span>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

export default Header;