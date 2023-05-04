import React, { useContext, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
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
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID,
        }

        handleAdd(newProductToAdd)
        setnewProduct(EMPTY_PRODUCT)

        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setnewProduct({ ...newProduct, [name]: value })
    }

    const displaySuccessMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
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
                    placeholder='Nom du produit (ex: Super burger)'
                    onChange={handleChange}
                />
                <input
                    name='imageSource'
                    value={newProduct.imageSource}
                    type="text"
                    placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
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
            <div className="submit">
                <button className="submit-button">Submit Button</button>
                {isSubmitted &&
                    <div className="submit-message">
                        <FiCheck />
                        <span>Ajouté avec succès !</span>
                    </div>}
            </div>
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

    .submit{
        background : green;
        grid-area: 4 / 2 / 4 / 3 ;
        display: flex;
        align-items: center;
        
        .submit-button {
            width: 50%;
        }

        .submit-message {
            border: 1px solid red;
        }
    }
`;

export default AddForm;