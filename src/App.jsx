import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// Lazy load route components
const ProductList = lazy(() => import('./components/ProductList'))
const ProductDetail = lazy(() => import('./components/ProductDetail'))
const Cart = lazy(() => import('./components/Cart'))
const NotFound = lazy(() => import('./components/NotFound'))
const Checkout = lazy(() => import('./pages/Checkout'))

const App = () => {
  return (
    <>
      <Header /> {/* Header appears on every page */}
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<ProductList />} /> {/* Home page */}
            <Route path="/product/:id" element={<ProductDetail />} /> {/* Product details page */}
            <Route path="/cart" element={<Cart />} /> {/* Cart page */}
            <Route path="/checkout" element={<Checkout />} /> {/* Checkout page */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all for invalid URLs */}
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
