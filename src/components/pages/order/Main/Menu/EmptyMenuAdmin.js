import React from 'react';

const EmptyMenuAdmin = ({ onReset }) => {
    return (
        <div>
            <button onClick={onReset}>Générer de nouveaux produits</button>
        </div>
    );
};

export default EmptyMenuAdmin;