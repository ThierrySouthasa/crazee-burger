import React from 'react';
import styled from 'styled-components/macro';
import Logo from '../../../../assets/Logo';
import { refreshPage } from '../../../../utils/window'


const NavbarLeftSide = () => {
    return (
        <NavbarLeftSideStyled>
            <Logo className={"logo-navbar"} onClick={refreshPage} />
        </NavbarLeftSideStyled>
    );
};

const NavbarLeftSideStyled = styled.div`
    padding: 1vh 0;

    .logo-navbar {
        cursor: pointer;
    }
`

export default NavbarLeftSide;