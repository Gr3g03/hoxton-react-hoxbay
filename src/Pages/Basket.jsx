import { useEffect, useState } from "react"



export default function Basket(props) {

    const [basketItem, setBasketItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/basket')
            .then(resp => resp.json())
            .then(BasketItemsFromServer => setBasketItem(BasketItemsFromServer))

    }, [])




    function totalPrice(basketItem) {
        let total = 0

        for (const totalEL of basketItem) {
            total += totalEL.price * totalEL.quantity
        }

        return total.toFixed(2)
    }

    function updatedQuantity(item, newQuantity) {
        let copyBasket = JSON.parse(JSON.stringify(basketItem))

        if (newQuantity > 0) {
            const match = copyBasket.find(target => target.id === item.id)
            match.quantity = newQuantity
        } else {
            copyBasket = copyBasket.filter(target => target.id !== item.id)
        }
        setBasketItem(copyBasket)
    }


    return (

        <main>
            <section className="basket-container">
                <h2>Your Basket</h2>
                <ul>
                    {basketItem.map(item =>

                        <li key={item.id}>
                            <article className="basket-container__item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width="90"
                                />
                                <p>{item.title}</p>
                                <p>
                                    Qty:
                                    <select defaultValue={item.quantity} onChange={(e) => {
                                        updatedQuantity(item, Number(e.target.value))
                                    }}
                                        className="amount-in-cart">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select >
                                </p>
                                {/* <!-- The item total is calculated using the Qty selected value --> */}
                                <p>Item total: £{(item.price * item.quantity).toFixed(2)}</p>
                            </article>
                        </li>
                    )}
                </ul>
                {/* <!-- Basket total is calculated using each item's total from above --> */}
                <h3>Your total: £{totalPrice(basketItem)}</h3>
            </section>
        </main>

    )
}