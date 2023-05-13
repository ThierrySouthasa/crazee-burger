import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../assets/theme';
import OrderContext from '../../../../context/OrderContext';
import Product from './Product';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

const Menu = () => {
    const { menu, isModeAdmin } = useContext(OrderContext)

    return (
        <MenuStyled>
            {menu.map((produit) => {
                return (
                    <Product
                        key={produit.id}
                        imageSource={produit.imageSource ? produit.imageSource : IMAGE_BY_DEFAULT}
                        title={produit.title}
                        price={produit.price}
                        hasDeleteButton={isModeAdmin}
                    />)
            })}
        </MenuStyled>
    );
};

const MenuStyled = styled.div`
    background-color: ${theme.colors.white};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll;
`

export default Menu;