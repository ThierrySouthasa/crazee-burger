import React from 'react';
import { HiUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Navbar = ({ firstName }) => {
    return (
        <NavbarStyled >
            <h1>Bonjour {firstName}</h1>
            <Link to={'/'}>
                <button>Déconnexion</button>
            </Link>
            <HiUserCircle />
        </NavbarStyled>
    );
};

const NavbarStyled = styled.nav`
        background-color: blue;
        height: 10vh;
`

export default Navbar;