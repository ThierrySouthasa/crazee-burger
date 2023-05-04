import React, { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

const AddForm = () => {

    const { handleAdd } = useContext(OrderContext)

    const newProduct = {
        id: new Date().getTime(),
        title: "Nouveau produit",
        imageSource: "https://media.istockphoto.com/id/1184633031/fr/vectoriel/illustration-disolement-de-vecteur-de-hamburger-de-dessin-anim%C3%A9.jpg?s=612x612&w=is&k=20&c=rzN3kVc5UsyP2-XKmngQViRPdrQLXV-O3AUji5l3qMk=",
        price: 2.5,
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleAdd(newProduct)
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">ImagePreview</div>
            <div className="input-fields">
                <input type="text" placeholder='Nom' />
                <input type="text" placeholder='Image URL' />
                <input type="text" placeholder='Prix' />
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
    background: red;
    grid-area: 1 / 1 / 4 / 2 ;
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