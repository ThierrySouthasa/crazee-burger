import { useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../../assets/theme';
import OrderContext from '../../../context/OrderContext';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

const OrderPage = () => {

    const [isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isEditSelected, setisEditSelected] = useState(false)
    const [isAddSelected, setisAddSelected] = useState(true)

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        isAddSelected,
        setisAddSelected,
        isEditSelected,
        setisEditSelected
    }

    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className='container'>
                    <Navbar />
                    <Main />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
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