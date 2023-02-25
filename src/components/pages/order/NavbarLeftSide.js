import React from 'react';
import { HiUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavbarLeftSide = ({ firstName }) => {
    return (
        <NavbarLeftSideStyled>
            <h1>Bonjour {firstName}</h1>
            <Link to={'/'}>
                <button>Déconnexion</button>
            </Link>
            <HiUserCircle />
        </NavbarLeftSideStyled>
    );
};

const NavbarLeftSideStyled = styled.div`
    background-color: purple;
`

export default NavbarLeftSide;