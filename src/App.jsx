import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/prodotti" element={<ProductsPage />} />
      </Route>
    </Routes>
  )
}

export default App