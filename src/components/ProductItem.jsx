import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
}

export default ProductItem
