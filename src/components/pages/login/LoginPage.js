import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import LogoStyled from '../../../assets/Logo';

const LoginPage = () => {

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
            <LogoStyled />
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <form action='submit' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    placeholder='Entrez votre prénom ...'
                    required
                    onChange={handleChange}
                />
                <button>Accéder à votre espace</button>
            </form>

        </div>
    );
};

export default LoginPage;