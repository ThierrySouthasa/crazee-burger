import React from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../../../../assets/theme';

const Admin = () => {
    return (
        <AdminStyled>

        </AdminStyled>
    );
};

const AdminStyled = styled.div`
    position: absolute;
    height: 250px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;

export default Admin;