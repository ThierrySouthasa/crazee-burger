import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../../../assets/theme';
import OrderContext from '../../../../context/OrderContext';
import Admin from './Admin/Admin';
import Basket from './Basket';
import Menu from './Menu';

const Main = () => {

    const { isModeAdmin } = useContext(OrderContext)

    return (
        <MainStyled>
            <Basket />
            <div className="menu-and-admin">
                <Menu />
                {isModeAdmin && <Admin />}
            </div>
        </MainStyled>
    );
};

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    height: calc(95vh - 10vh);
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: 20% 1fr;

    .menu-and-admin {
        position: relative;
        overflow-y: hidden;
        display: grid;
        //border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};

    }

`

export default Main;