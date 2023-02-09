import React from 'react';
import LogoStyled from '../../../assets/Logo';
import LoginForm from './LoginForm';
import styled from 'styled-components/macro';

const LoginPage = () => {

    return (
        <LoginPageStyled>
            <LogoStyled />
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
`


export default LoginPage;