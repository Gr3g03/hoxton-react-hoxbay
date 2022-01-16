import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function SingleProduct(props) {


    const params = useParams()

    const [products, setProduct] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3001/products/${params.id}`)
            .then(resp => resp.json())
            .then(productFromServer => setProduct(productFromServer))
    }, [])


    return (

        <main>
            <section className="product-detail main-wrapper">
                <img
                    src={products.image}
                    alt={products.title}
                />
                <div className="product-detail__side"  >
                    {/* (style="border-color: var(--yellow);") */}
                    <h3></h3>
                    <h2>{products.title}</h2>
                    <p>
                        {products.description}
                    </p>
                    <p>${products.price}</p>
                    {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                    <Link to={"/basket"}>
                        <button onClick={function () {
                            let updatedBasket = [...props.basketItem, products]
                            props.setBasketItem(updatedBasket)
                        }}>Add to basket</button></Link>
                </div>

            </section>
        </main>

    )
}