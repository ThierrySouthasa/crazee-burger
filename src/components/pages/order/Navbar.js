import React from 'react';
import styled from 'styled-components/macro';
import NavbarLeftSide from './NavbarLeftSide';
import NavbarRightSide from './NavbarRightSide';
import { theme } from '../../../assets/theme';

const Navbar = ({ firstName }) => {
    return (
        <NavbarStyled >
            <NavbarLeftSide />
            <NavbarRightSide firstName={firstName} />
        </NavbarStyled>
    );
};

const NavbarStyled = styled.nav`
        background-color: ${theme.colors.white};
        height: 10vh;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        border-top-left-radius: ${theme.borderRadius.extraRound};
        border-top-right-radius: ${theme.borderRadius.extraRound};
`

export default Navbar;