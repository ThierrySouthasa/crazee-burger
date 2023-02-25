import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { HiUserCircle } from "react-icons/hi";
import Logo from '../../../assets/Logo';
import styled from 'styled-components/macro';

const OrderPage = () => {

    const [params] = useSearchParams()
    const firstName = params.get('firstName')

    return (
        <OrderPageStyled>
            <div className='container'>
                <div className='navbar'>
                    <h1>Bonjour {firstName}</h1>
                    <Link to={'/'}>
                        <button>Déconnexion</button>
                    </Link>
                    <HiUserCircle />
                </div>
                <div className='main'>

                </div>
            </div>
        </OrderPageStyled>

    );
};

const OrderPageStyled = styled.div`
    background-color: red;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background-color: orange;
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction : column;

        .navbar {
            background-color: blue;
            height: 10vh;
        }

        .main {
            background-color: green;
            flex: 1;
        }
    }
`

export default OrderPage;