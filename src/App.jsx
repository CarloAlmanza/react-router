import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'

import AppNavbar from './components/Navbar'

function App() {
  return (
    <>
      <AppNavbar />

      <div className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/prodotti" element={<ProductsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App