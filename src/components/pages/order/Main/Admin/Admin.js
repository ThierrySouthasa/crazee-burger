import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import OrderContext from '../../../../../context/OrderContext';
import AdminPanel from './AdminPanel/AdminPanel';
import AdminTabs from './AdminTabs';

const Admin = () => {
    const { isCollapsed } = useContext(OrderContext)

    return (
        <AdminStyled>
            <AdminTabs />
            {isCollapsed && <AdminPanel />}
        </AdminStyled>
    );
};

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export default Admin;