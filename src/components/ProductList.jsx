import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFetchProducts from '../hooks/useFetchProducts'
import ProductItem from './ProductItem'
import './ProductList.css'

const ProductList = ({ initialSearchTerm = '' }) => {
    const { products, loading, error } = useFetchProducts()
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading) return <p>Loading products...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="product-list-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

ProductList.propTypes = {
    initialSearchTerm: PropTypes.string
}

export default ProductList
