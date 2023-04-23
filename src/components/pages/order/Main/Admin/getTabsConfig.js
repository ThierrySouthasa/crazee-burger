import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const getTabsConfig = (currentTabSelected) => [
    //{
    //  index: "chevron",
    //  label: "",
    //  Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
    //  onClick: handleClick,
    //  className: isCollapsed ? "" : "isActive",
    //},
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus />,
        className: currentTabSelected === "add" ? "isActive" : "",
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        className: currentTabSelected === "edit" ? "isActive" : "",
    }
]