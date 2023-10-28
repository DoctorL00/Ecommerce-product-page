import styles from '../styles/Cart.module.css';
import {CartContext, SetCartContext} from '../App';
import {useContext, useEffect} from "react";
import CartItem from "./CartItem.jsx";
function Cart({setShowCart}){

    const cart = useContext(CartContext);
    const setCart = useContext(SetCartContext);

    useEffect(() => {
        const cartCopy = {...cart};

        for (let prop in cartCopy) {
            cartCopy[prop].isSeen = true;
        }

        setCart({...cartCopy});
    }, []);


    return (
        <div className={styles.Cart} onMouseLeave={()=>setShowCart(false)}>

            <h4>Cart</h4>

            {
                Object.keys(cart).length === 0 && <p>Your cart is empty</p>
            }

            {
                Object.values(cart).map((item) => <CartItem
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    description={item.description}
                                    numOfItems={item.numOfItems}
                                    price={item.price}

                    />
                )
            }

            <button disabled={Object.keys(cart).length === 0}>Checkout</button>
        </div>
    );
}

export default Cart;