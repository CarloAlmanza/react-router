import { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

function ProductsPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <h1 className="mb-4">I Nostri Prodotti</h1>

            <div className="row">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsPage