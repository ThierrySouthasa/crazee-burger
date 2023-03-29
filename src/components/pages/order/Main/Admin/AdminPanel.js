import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';

const AdminPanel = () => {
    return (
        <AdminPanelStyled>

        </AdminPanelStyled>
    );
};

const AdminPanelStyled = styled.div`
    height: 250px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;

export default AdminPanel;