import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function CategorieProduct() {

    const [products, setProduct] = useState([])

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/products/${params.id}`)
            .then(resp => resp.json())
            .then(productsFromServer => setProduct(productsFromServer))
    }, [])

    // let CategoryProduct = products.filter(product => product.categoryId === Number(params.id))


    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {/* {products.map(products => */}
                    <li key={products.id}>
                        <Link to={`/home/${products.id}`}>
                            <article className="product-item">
                                <img src={products.image}
                                    alt={products.title} />
                                <h3>{products.title}</h3>
                            </article>
                        </Link>
                    </li>
                    {/* )} */}

                </ul>
            </section>
        </main>

    )

}