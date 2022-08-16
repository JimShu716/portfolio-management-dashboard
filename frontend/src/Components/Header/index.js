import {useContext} from "react";
import SideBarOpenContext from "../Sidebar/SideBarContext";
import IconButton from "@mui/material/IconButton";
import { MdMenu } from 'react-icons/md';

const Header = (props) =>{
    const [open, setOpen] = useContext(SideBarOpenContext);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return(
        <div>
            {open?null:
                <div>
                    <div className="NavActionButton">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{fontSize: "20px"}}
                            onClick={handleDrawer}
                        >
                            <MdMenu />
                        </IconButton>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;