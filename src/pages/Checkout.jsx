import React from 'react'
import { useLocation } from 'react-router-dom'

const Checkout = () => {
    const { state } = useLocation() // Access cart items passed via navigate
    const cartItems = state ? state.cartItems : [] // Default to empty array if no state

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-content">
                <div className="checkout-items">
                    <h3>Order Summary</h3>
                    {cartItems.length === 0 ? (
                        <p>No items in your cart</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="checkout-item">
                                <img src={item.image} alt={item.title} width="100" height="100" />
                                <div className="item-details">
                                    <h4>{item.title}</h4> {/* Displaying product name */}
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="checkout-summary">
                    <h3>Shipping Details</h3>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" required />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" placeholder="Enter your shipping address" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" placeholder="Enter your phone number" required />
                        </div>
                        <button className="place-order-button">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout
