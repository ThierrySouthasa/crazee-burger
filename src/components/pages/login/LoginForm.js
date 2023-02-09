import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { HiUserCircle } from "react-icons/hi";

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

        </div>
    );
};

export default LoginForm;