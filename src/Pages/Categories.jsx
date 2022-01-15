import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'

export default function Categories() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/products`)
            .then(resp => resp.json())
            .then(productsFromServer => setProducts(productsFromServer))
    }, [])


    useEffect(() => {
        fetch(`http://localhost:3001/categories`)
            .then(resp => resp.json())
            .then(categoriesFromServer => setCategories(categoriesFromServer))
    }, [])


    return (
        <main>
            <section className="categories-container main-wrapper">
                <ul className="categories-container__list">
                    {/* <!-- Single category --> */}

                    {
                        categories.map(category =>
                            <li key={category.id}>
                                <Link to={'/categories/' + category.id}>{category.name}</Link>
                            </li>
                        )}
                </ul>
            </section>
        </main>

    )
}