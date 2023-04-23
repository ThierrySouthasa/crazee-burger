import React, { useContext } from 'react';
import styled from 'styled-components';
import Tab from '../../../../../assets/Tab';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { theme } from '../../../../../assets/theme';
import OrderContext from '../../../../../context/OrderContext';

const AdminTabs = () => {
  const { isCollapsed, setIsCollapsed, isAddSelected, setisAddSelected, isEditSelected, setisEditSelected } = useContext(OrderContext)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectTab = (tabSelected) => {
    setIsCollapsed(true)

    if (tabSelected === "add") {
      setisAddSelected(true)
      setisEditSelected(false)
    }

    if (tabSelected === "edit") {
      setisEditSelected(true)
      setisAddSelected(false)
    }
  }

  const tabsConfig = [
    {
      label: "",
      Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
      onClick: handleClick,
      className: isCollapsed ? "" : "isActive",
    },
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddSelected ? "isActive" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "isActive" : "",
    }
  ]

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            className={tab.className} />
        )
      }))}
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .isActive {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;

export default AdminTabs;