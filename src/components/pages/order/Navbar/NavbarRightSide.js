import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components/macro';
import ToggleButton from '../../../../assets/ToggleButton';
import Profile from './Profile';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../../../../assets/theme"
import { FaUserSecret } from "react-icons/fa"

const NavbarRightSide = ({ firstName }) => {

    const [isModeAdmin, setIsModeAdmin] = useState(false)


    const displatToastNotification = () => {
        if (isModeAdmin) {
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
            <ToggleButton labelIfChecked='DÉSACTIVER LE MODE ADMIN' labelIfUnchecked='ACTIVER LE MODE ADMIN' onToggle={displatToastNotification} />
            <Profile firstName={firstName} />
            <ToastContainer className="toaster" bodyClassName="body-toast" />
        </NavbarRightSideStyled>
    );
};


const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    font-family: "Open Sans", sans-serif;

    .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`

export default NavbarRightSide;