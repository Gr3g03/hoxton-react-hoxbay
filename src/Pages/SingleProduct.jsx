import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function SingleProduct() {

    const params = useParams()

    const [products, setProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3001/products/${params.id}`)
            .then(resp => resp.json())
            .then(productsFromServer => setProduct(productsFromServer))
    }, [])

    return (

        <main>
            {
                products.map(product =>
                    <section className="product-detail main-wrapper">
                        <img
                            src={product.image}
                            alt={product.title}
                        />
                        <div className="product-detail__side" style="border-color: var(--yellow);">

                            <h3></h3>
                            <h2>{product.title}</h2>
                            <p>
                                {product.description}
                            </p>
                            <p>{product.price}</p>
                            {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                            <button>Add to basket</button>
                        </div>

                    </section>
                )}
        </main>

    )
}