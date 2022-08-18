import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const OrderPage = () => {

    const [params] = useSearchParams()
    const firstName = params.get('firstName')

    return (
        <div>
            <Link to={'/'}>
                <button>Déconnexion</button>
            </Link>
            <h1>Bonjour {firstName}</h1>
        </div>
    );
};

export default OrderPage;