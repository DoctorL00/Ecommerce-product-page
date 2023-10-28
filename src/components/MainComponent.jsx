import styles from '../styles/MainComponent.module.css';
import {useContext, useState} from "react";
import {CartContext, SetCartContext} from '../App';
import {v4 as uuid} from "uuid";

function MainComponent() {

    const [numItem, setNumItem] = useState(0);
    // const cart = useContext(CartContext);
    const setCart = useContext(SetCartContext);
    const cart = useContext(CartContext);


    function handleIncrement() {
        setNumItem(prev => prev + 1);
    }

    function handleDecrement() {
        if (numItem !== 0) {
            setNumItem(prev => prev - 1);
        }
    }

    function addToCart() {


        if(numItem !== 0) {
            setCart({...cart, 'sneakers': {
                        id: uuid(),
                        isSeen: false,
                        image: "../images/image-product-1.jpg",
                        description: "Fall Limited Edition Sneakers",
                        numOfItems: numItem,
                        price: "125.00"
                }
            });
        }



    }


    return (
        <div className={styles.MainComponent}>

            <h5>SNEAKER COMPANY</h5>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <div className={styles.prices}>

                <p>$125.00</p>
                <p>50%</p>
                <p>$250.00</p>

            </div>
            <div>
                <div className={styles.inDeBtn}>

                    <button onClick={handleDecrement}><img src={"SVGs/icon-minus.svg"} alt=""/></button>
                    <p>{numItem}</p>
                    <button onClick={handleIncrement}><img src={"SVGs/icon-plus.svg"} alt=""/></button>

                </div>

                <button className={styles.addToCartBtn} onClick={addToCart}>

                    <img src={"SVGs/icon-cart-white.svg"} alt=""/>
                    <p>Add to cart</p>

                </button>
            </div>
        </div>
    )
}

export default MainComponent;