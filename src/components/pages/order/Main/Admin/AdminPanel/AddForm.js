import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

const AddForm = () => {

    const { handleAdd } = useContext(OrderContext)

    const [newProduct, setnewProduct] = useState(EMPTY_PRODUCT)

    const handleSubmit = (event) => {
        event.preventDefault()

        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID,
        }

        handleAdd(newProductToAdd)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setnewProduct({ ...newProduct, [name]: value })
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">
                {newProduct.imageSource ? (
                    <img src={newProduct.imageSource} alt={newProduct.title} />) : (
                    <div>Aucune Image</div>
                )}
            </div>
            <div className="input-fields">
                <input
                    name='title'
                    value={newProduct.title}
                    type="text"
                    placeholder='Nom'
                    onChange={handleChange}
                />
                <input
                    name='imageSource'
                    value={newProduct.imageSource}
                    type="text"
                    placeholder='Image URL'
                    onChange={handleChange}
                />
                <input
                    name='price'
                    value={newProduct.price ? newProduct.price : ""}
                    type="text"
                    placeholder='Prix'
                    onChange={handleChange}
                />
            </div>
            <button className="submit-button">
                Submit button
            </button>
        </AddFormStyled>
    );
};

const AddFormStyled = styled.form`
    height: 100%;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);

    .image-preview{
        grid-area: 1 / 1 / 4 / 2 ;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .input-fields{
        background : blue;
        grid-area: 1 / 2 / 4 / 3 ;

        display: grid;
    }

    .submit-button{
        background : green;
        grid-area: 4 / 2 / 4 / 3 ;
        width: 50%;
    }

            `;

export default AddForm;