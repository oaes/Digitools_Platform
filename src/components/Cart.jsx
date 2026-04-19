import React from 'react'
import { toast } from 'react-toastify';

const Cart = ({cartItems, onRemove, onCheckout}) => {

    const total = cartItems?.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (item) => {
        onRemove(item.id);
        toast.error(`"${item.name}" removed form cart.`, {
            position: 'top-center',
            autoClose: 2500,
        });
    };

    const handleCheckout = () => {
        if(cartItems.length === 0 ) return;
        onCheckout();
        toast.success('Checkout successful! Your cart has been cleared', {
            position: 'top-center',
            autoClose: 3000,
        });
    };


    
}

export default Cart