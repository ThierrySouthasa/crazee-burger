import React from 'react';
import styled from 'styled-components/macro';
import Profile from './Profile';

const NavbarRightSide = () => {
    return (
        <NavbarRightSideStyled>
            <Profile />
        </NavbarRightSideStyled>
    );
};


const NavbarRightSideStyled = styled.div`
    background-color: yellow;
`

export default NavbarRightSide;