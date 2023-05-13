import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../assets/theme';
import PrimaryButton from './PrimaryButton';
import { formatPrice } from '../../../../utils/maths'
import { TiDelete } from 'react-icons/ti'

const Product = ({ imageSource, title, price, hasDeleteButton, onDelete }) => {
  return (
    <ProductStyled className="produit">
      {hasDeleteButton &&
        <button
          className="delete-button"
          aria-label="delete-button"
          onClick={onDelete}
        >
          <TiDelete className="icon" />
        </button>}
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{formatPrice(price)}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

    .delete-button {
      border: 1px solid red;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;
    }

    .icon {
      height: 35px;
      width: 35px;
      :hover {
        color: ${theme.colors.redSecondary};
      }
    }

    .image {
            width: 100%;
            height: auto;
            margin-top: 30px;
            margin-bottom: 20px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

    .info-text {
            display: grid;
            grid-template-rows: 30% 70%;
            padding: 5px;

            .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .price{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
        }
`;

export default Product;