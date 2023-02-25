import React from 'react';
import styled from 'styled-components/macro';

const NavbarRightSide = ({ firstName }) => {
    return (
        <NavbarRightSideStyled>
            Right
        </NavbarRightSideStyled>
    );
};

const NavbarRightSideStyled = styled.div`
    background-color: yellow;
`

export default NavbarRightSide;