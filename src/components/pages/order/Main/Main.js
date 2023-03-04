import React from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../../../assets/theme';
import Basket from './Basket';
import Menu from './Menu';

const Main = () => {
    return (
        <MainStyled>
            <Basket />
            <Menu />
        </MainStyled>
    );
};

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    flex: 1;  
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: 20% 1fr;

`

export default Main;