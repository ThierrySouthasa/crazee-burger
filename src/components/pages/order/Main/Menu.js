import React, { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { theme } from '../../../../assets/theme';
import Product from './Product';

const Menu = () => {
    const [menu, setMenu] = useState(fakeMenu2)

    return (
        <MenuStyled>
            {menu.map((produit) => {
                return (
                    <Product
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
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    .produit {
        background-color: red;
        width: 240px;
        height: 330px;

        .image {
            width: 100px;
            height: auto;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`

export default Menu;