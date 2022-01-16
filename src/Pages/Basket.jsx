import { useEffect, useState } from "react"



export default function Basket(props) {


    function total() {
        let amount = props.basketItem.map(item => item.price)
        amount.filter(item => item.title)

        let newamount = amount.map(item => item.price)

        for (const total of newamount) {
            newamount = newamount + total
        }
        return newamount
    }

    return (

        <main>
            <section className="basket-container">
                <h2>Your Basket</h2>
                <ul>
                    {props.basketItem.map(item =>

                        <li>
                            <article className="basket-container__item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width="90"
                                />
                                <p>{item.title}</p>
                                <p>
                                    Qty:
                                    <select className="amount-in-cart"
                                    ><option value="0">0</option
                                    ><option value="1">1</option
                                    ><option value="2">2</option
                                    ><option value="3">3</option>
                                    </select >
                                </p>
                                {/* <!-- The item total is calculated using the Qty selected value --> */}
                                <p>Item total: £{item.price}</p>
                            </article>
                        </li>
                    )}
                </ul>
                {/* <!-- Basket total is calculated using each item's total from above --> */}
                <h3>Your total: £{total}</h3>
            </section>
        </main>

    )
}