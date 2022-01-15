import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function CategorieProduct() {

    const [products, setProduct] = useState([])

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/products/`)
            .then(resp => resp.json())
            .then(productsFromServer => setProduct(productsFromServer))
    }, [])

    function productToDisplay() {
        let productsToDisplay = JSON.parse(JSON.stringify(products));
        productsToDisplay = productsToDisplay.filter(
            (product) => product.categoryId === Number(params.id)
        );
        return productsToDisplay;
    }

    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {productToDisplay().map((product) => (
                        <Link to={`/home/${product.id}`}>
                            <li>
                                <article className="product-item">
                                    <img src={product.image} alt={product.title} />
                                    <h3>{product.title}</h3>
                                </article>
                            </li>
                        </Link>
                    ))}
                </ul>
            </section>
        </main>

    )

}