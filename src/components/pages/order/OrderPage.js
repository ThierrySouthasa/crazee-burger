import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components/macro';
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
    }
`

export default OrderPage;