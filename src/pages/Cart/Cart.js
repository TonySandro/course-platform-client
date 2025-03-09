import React, { useState } from 'react';
import InitialNavBar from '../../components/InitialNavBar/InitialNavBar';
import CartPage from '../../components/Cart/CartPage';
import { CourseObject } from '../Catalog/Data';

function Cart() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <div>
            <InitialNavBar isAuthenticated={isAuthenticated} />
            <CartPage cartItems={[CourseObject]} />
        </div>
    );
}

export default Cart;