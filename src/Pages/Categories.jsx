import { Link } from 'react-router-dom'
import '../styles/index.css'
import CategorieProduct from './CategorieProduct'

export default function Categories() {
    return (
        <main>
            <section className="categories-container main-wrapper">
                <ul className="categories-container__list">
                    {/* <!-- Single category --> */}
                    <li>
                        {/* the anchor tags  --> */}
                        <Link to={'/categories/1'}>electronics</Link>
                    </li>

                    <li>
                        <Link to={'/categories/2'}>jewelery</Link>
                    </li>
                    <li>
                        <Link to={'/categories/3'}>men's clothing</Link>
                    </li>
                    <li>
                        <Link to={'/categories/4'}>women's clothing</Link>
                    </li>
                </ul>
            </section>
        </main>

    )
}