import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                if (!response.ok) {
                    throw new Error(`Error fetching product: ${response.status}`)
                }
                const data = await response.json()
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!product) return <p>No product found</p>

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="200" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    )
}

// PropTypes for ProductDetail component
ProductDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
    loading: PropTypes.bool,
    error: PropTypes.string,
}

export default ProductDetail
