import React from 'react';

const Product = ({ imageSource, title, price }) => {
    return (
        <div className="produit">
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="info-text">
                <div className="description">
                    <div className="title">{title}</div>
                    <div className="price">{price}</div>
                    <button className='add-button'>Ajouter</button>
                </div>
            </div>
        </div>
    );
};

export default Product;