import React from 'react';
import styled from 'styled-components/macro';
import NavbarLeftSide from './NavbarLeftSide';
import NavbarRightSide from './NavbarRightSide';

const Navbar = ({ firstName }) => {
    return (
        <NavbarStyled >
            <NavbarLeftSide />
            <NavbarRightSide firstName={firstName} />
        </NavbarStyled>
    );
};

const NavbarStyled = styled.nav`
        background-color: blue;
        height: 10vh;
        padding-left: 20px;
        display: flex;
        justify-content: space-between;
`

export default Navbar;