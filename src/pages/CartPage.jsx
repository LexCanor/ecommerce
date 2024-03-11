import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';
import CartProduct from '../components/cartPage/CartProduct';

const CartPage = () => {

    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk());
    
    }, []);
    
    
    return (
        <div>
        {
            cart?.map(prod => (
            <CartProduct 
                key={prod.id}
                prod={prod}
            />
            ))
        }
        </div>
    )
}

export default CartPage;