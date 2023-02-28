import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { theme } from '../../../assets/theme';
import Main from './Main';
import Navbar from './Navbar';

const OrderPage = () => {

    const [params] = useSearchParams()
    const firstName = params.get('firstName')

    return (
        <OrderPageStyled>
            <div className='container'>
                <Navbar firstName={firstName} />
                <Main />
            </div>
        </OrderPageStyled>
    );
};

const OrderPageStyled = styled.div`
    background-color: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction : column;
        border-radius: ${theme.borderRadius.extraRound};
    }
`

export default OrderPage;