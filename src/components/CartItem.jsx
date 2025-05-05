import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    const [quantity, setQuantity] = useState(item.quantity)

    const handleChangeQuantity = (e) => {
        const newQuantity = parseInt(e.target.value, 10)
        setQuantity(newQuantity)
        onUpdateQuantity(item.id, newQuantity)
    }

    return (
        <div>
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleChangeQuantity}
            />
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    )
}

// PropTypes for CartItem component
CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
}

export default CartItem
