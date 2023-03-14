import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components/macro';
import ToggleButton from '../../../../assets/ToggleButton';
import Profile from './Profile';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserSecret } from "react-icons/fa"
import ToastAdmin from './ToastAdmin';

const NavbarRightSide = ({ firstName }) => {

    const [isModeAdmin, setIsModeAdmin] = useState(false)


    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 4500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setIsModeAdmin(!isModeAdmin)
    }

    return (
        <NavbarRightSideStyled>
            <ToggleButton labelIfChecked='DÉSACTIVER LE MODE ADMIN' labelIfUnchecked='ACTIVER LE MODE ADMIN' onToggle={displayToastNotification} />
            <Profile firstName={firstName} />
            <ToastAdmin />
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