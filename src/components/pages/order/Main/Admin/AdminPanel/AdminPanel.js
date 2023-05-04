import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../../assets/theme';
import OrderContext from '../../../../../../context/OrderContext';
import { getTabSelected, tabsConfig } from '../tabsConfig';

const AdminPanel = () => {
    const { currentTabSelected } = useContext(OrderContext)

    const tabs = tabsConfig
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {tabSelected.Content}
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
    padding: 30px 5%;
`;

export default AdminPanel;