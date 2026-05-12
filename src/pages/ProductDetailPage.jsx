import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../components/Loader'

function ProductDetailPage() {
    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader />

    return (
        <div className="row">
            <div className="col-md-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                />
            </div>

            <div className="col-md-6">
                <h1>{product.title}</h1>

                <p className="text-muted">
                    {product.category}
                </p>

                <p>{product.description}</p>

                <h3 className="my-4">
                    € {product.price}
                </h3>

                <button className="btn btn-primary">
                    Aggiungi al carrello
                </button>
            </div>
        </div>
    )
}

export default ProductDetailPage