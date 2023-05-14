import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import TextInput from '../../../../../../assets/TextInput';
import PrimaryButton from '../../../../../../assets/PrimaryButton';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getInputTextsConfig } from './inputTextsConfig';

export const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

const AddForm = () => {

    const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID,
        }

        handleAdd(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)

        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProduct({ ...newProduct, [name]: value })
    }

    const displaySuccessMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
    }

    const inputTexts = getInputTextsConfig(newProduct)

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
            <div className="input-fields">
                {inputTexts.map((input) => (
                    <TextInput {...input} onChange={handleChange} version="minimalist" />
                ))}
            </div>
            <div className="submit">
                <PrimaryButton className="submit-button" label={"Ajouter un nouveau produit au menu"} version="success" />
                {isSubmitted && <SubmitMessage />}
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
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .input-fields{
        grid-area: 1 / 2 / 4 / 3 ;
        grid-row-gap: 8px;
        display: grid;

    }

    .submit{
        grid-area: 4 / 2 / 4 / 3 ;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
        
        .submit-button {
            width: 50%;
        }
    }
`;

export default AddForm;