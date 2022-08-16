import {createContext} from "react";

const SideBarOpenContext = createContext({
    openSidebar: true,
    setOpenSidebar: () => {}
});

export default SideBarOpenContext;