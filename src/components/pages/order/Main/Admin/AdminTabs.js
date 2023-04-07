import React from 'react';
import styled from 'styled-components';
import Tab from '../../../../../assets/Tab';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const AdminTabs = () => {
    return (
        <AdminTabsStyled>
            <Tab Icon={<FiChevronDown />} />
        </AdminTabsStyled>
    );
};

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
`;

export default AdminTabs;