import React from 'react';
import styled from 'styled-components';
import Tab from '../../../../../assets/Tab';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { theme } from '../../../../../assets/theme';

const AdminTabs = ({ setIsCollapsed, isCollapsed }) => {
    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <AdminTabsStyled>
            <Tab Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />} onClick={handleClick} className={!isCollapsed ? "isActive" : ""} />
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
`;

export default AdminTabs;