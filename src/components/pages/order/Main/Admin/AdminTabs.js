import React, { useContext } from 'react';
import styled from 'styled-components';
import Tab from '../../../../../assets/Tab';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { getTabsConfig } from "./getTabsConfig"
import { theme } from '../../../../../assets/theme';
import OrderContext from '../../../../../context/OrderContext';

const AdminTabs = () => {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } = useContext(OrderContext)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectTab = (tabSelected) => {
    setIsCollapsed(true)
    setCurrentTabSelected(tabSelected)
  }

  const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={handleClick}
        className={isCollapsed ? "" : "isActive"}
      />
      {tabs.map((tab => (
        <Tab
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "isActive" : ""} />
      )
      ))}
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