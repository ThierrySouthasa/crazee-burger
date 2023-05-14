import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { HiUserCircle } from "react-icons/hi";
import { theme } from '../../../assets/theme';

const LoginForm = () => {

    const [firstName, setFirstName] = useState('')
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        setFirstName('')
        navigate({
            pathname: '/order',
            search: createSearchParams({
                firstName: firstName,
            }).toString(),
        })
    }

    const handleChange = event => {
        setFirstName(event.target.value)
    }

    return (
        <div>
            <LoginFormStyled>
                <h1>Bienvenue chez nous !</h1>
                <h2>Connectez-vous</h2>
                <form action='submit' onSubmit={handleSubmit}>
                    <div className='inputButton'>
                        <HiUserCircle />
                        <input
                            type="text"
                            value={firstName}
                            placeholder='Entrez votre prénom'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button>Accéder à mon espace</button>
                </form>
            </LoginFormStyled>
        </div>
    );
};

const LoginFormStyled = styled.div`
    text-align : center;
    text-transform : uppercase;
    font-family : "Amatic SC", cursive;
    margin-left: auto;
    margin-right: auto;
    width: 40rem;
    h1 {
        border-bottom : 5px solid #f56a2c;
        padding-bottom : 2rem;
        font-size : 4.5rem;
        color : ${theme.colors.white};
    }
    h2 {
        padding : 2rem 0;
        font-size : 3rem;
        color : ${theme.colors.white};
    }
    form {
        display : flex;
        flex-direction : column;
        color : #717C93;
        .inputButton {
            display : flex;
            align-items : center;
            justify-content : center;
            height : 80px;
            border-radius : 5px;
            margin-bottom : 0.8em;
            font-size : 40px;
            background-color : ${theme.colors.white};
            input {
                height: 30%;
                width : 70%;
                border-radius : 5px;
                border : none;
                font-size : 0.55em;
                margin-left : 1em;
            }
        }
        button {
            height : 80px;
            border : none;
            border-radius : 5px;
            background-color : #F39900;
            color : ${theme.colors.white};
            font-size : 1.3em;
            font-weight : bold;
            &:hover {
                background-color : ${theme.colors.white};
                color : #F39900;
                border : 1px solid #F39900;
            }
        }
    }
`
export default LoginForm;