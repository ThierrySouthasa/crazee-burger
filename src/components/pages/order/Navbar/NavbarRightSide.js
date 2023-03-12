import React from 'react';
import styled from 'styled-components/macro';
import ToggleButton from '../../../../assets/ToggleButton';
import Profile from './Profile';

const NavbarRightSide = ({ firstName }) => {
    return (
        <NavbarRightSideStyled>
            <ToggleButton labelIfChecked='DÉSACTIVER LE MODE ADMIN' labelIfUnchecked='ACTIVER LE MODE ADMIN' />
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