import React from 'react';
import styled from 'styled-components/macro';
import Profile from './Profile';

const NavbarRightSide = ({ firstName }) => {
    return (
        <NavbarRightSideStyled>
            <button>Mode Admin</button>
            <Profile firstName={firstName} />
        </NavbarRightSideStyled>
    );
};


const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    font-family: "Open Sans", sans-serif;
`

export default NavbarRightSide;