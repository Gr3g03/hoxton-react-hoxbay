import { useEffect, useState } from "react"

export default function Home() {

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/products`)
            .then(resp => resp.json())
            .then(productsFromServer => setProduct(productsFromServer))
    }, [])

    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {products.map(products =>
                        <li key={products.id}>
                            <a href={products.id}>
                                <article className="product-item">
                                    <img src={products.image}
                                        alt={products.title} />
                                    <h3>{products.title}</h3>
                                </article>
                            </a>
                        </li>
                    )}

                </ul>
            </section>
        </main>

    )

}