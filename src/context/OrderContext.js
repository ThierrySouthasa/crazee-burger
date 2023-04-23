import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => { },

    isCollapsed: false,
    setIsCollapsed: () => { },

    isAddSelected: false,
    setisAddSelected: () => { },

    isEditSelected: false,
    setisEditSelected: () => { },

    currentTabSelected: false,
    setCurrentTabSelected: () => { },
})