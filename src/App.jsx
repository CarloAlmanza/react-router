import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/chi-siamo"
          element={<AboutPage />}
        />

        <Route
          path="/prodotti"
          element={<ProductsPage />}
        />

        <Route
          path="/prodotti/:id"
          element={<ProductDetailPage />}
        />

        <Route
          path="/carrello"
          element={<CartPage />}
        />

        <Route
          path="*"
          element={<h1>404 Not Found</h1>}
        />
      </Route>
    </Routes>
  )
}

export default App