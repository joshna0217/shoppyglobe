import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateCartQuantity } from '../redux/cartSlice'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateCartQuantity({ id, quantity }))
    }

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    // Handle Proceed to Checkout button click
    const handleProceedToCheckout = () => {
        navigate('/checkout', { state: { cartItems } }) // Pass cart items to checkout
    }

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemoveItem}
                            onUpdateQuantity={handleUpdateQuantity}
                        />
                    ))}
                    <div className="cart-summary">
                        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    </div>
                    {/* Checkout Button */}
                    <button onClick={handleProceedToCheckout} className="checkout-button">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart
