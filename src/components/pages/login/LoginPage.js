import React from 'react';
import Logo from '../../../assets/Logo';
import LoginForm from './LoginForm';
import styled from 'styled-components/macro';

const LoginPage = () => {

    return (
        <LoginPageStyled>
            <Logo className={"logo-login-page"} />
            <LoginForm />
        </LoginPageStyled>
    );
};

const LoginPageStyled = styled.div`
    height : 100vh;
    background : rgba(0, 0, 0, 0.7) url(https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-size : cover;
    background-position : center;
    background-blend-mode: darken;

    .logo-login-page {
        transform: scale(2.3);
        padding: 200px 0 170px 0;
    }
`


export default LoginPage;