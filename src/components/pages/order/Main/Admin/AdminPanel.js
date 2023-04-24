import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';
import OrderContext from '../../../../../context/OrderContext';
import { getTabsConfig, getTabSelected } from './getTabsConfig';

const AdminPanel = () => {
    const { currentTabSelected } = useContext(OrderContext)

    const tabs = getTabsConfig(currentTabSelected)
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {currentTabSelected === tabSelected.index && tabSelected.label}
        </AdminPanelStyled>
    );
};

const AdminPanelStyled = styled.div`
    height: 251px;
    background-color: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound}
    box-shadow: ${theme.shadows.subtle};
`;

export default AdminPanel;