import React from 'react';
import styled from 'styled-components/macro';
import Logo from '../../../assets/Logo';


const NavbarLeftSide = () => {
    return (
        <NavbarLeftSideStyled>
            <Logo />
        </NavbarLeftSideStyled>
    );
};

const NavbarLeftSideStyled = styled.div`
    padding: 12px 0;
`

export default NavbarLeftSide;