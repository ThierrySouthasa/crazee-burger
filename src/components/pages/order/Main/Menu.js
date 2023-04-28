import React, { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { theme } from '../../../../assets/theme';
import Product from './Product';

const Menu = () => {
    const [menu] = useState(fakeMenu2)

    return (
        <MenuStyled>
            {menu.map((produit) => {
                return (
                    <Product
                        key={produit.id}
                        imageSource={produit.imageSource}
                        title={produit.title}
                        price={produit.price} />)
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