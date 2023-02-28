import React from 'react';
import styled from 'styled-components/macro';
import { HiUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';

const NavbarRightSide = ({ firstName }) => {
    return (
        <NavbarRightSideStyled>
            <h1>Bonjour {firstName}</h1>
            <Link to={'/'}>
                <button>Déconnexion</button>
            </Link>
            <HiUserCircle />
        </NavbarRightSideStyled>
    );
};


const NavbarRightSideStyled = styled.div`
    background-color: yellow;
`

export default NavbarRightSide;