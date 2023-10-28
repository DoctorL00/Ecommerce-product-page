import styles from '../styles/Navbar.module.css';
import {CartContext} from '../App';
import {useContext, useEffect, useState} from "react";
import Cart from "./Cart.jsx";

function Navbar() {


    const cart = useContext(CartContext);
    const [markValue, setMarkValue] = useState(0);

    const [showCart, setShowCart] = useState(false);


    useEffect(() => {
        let count = 0;

        for (let item in cart) {

            if (!cart[item].isSeen) {
                count += cart[item].numOfItems;
            }

        }

        setMarkValue(count);
    }, [cart])


    return (<nav>

            <img src={"../SVGs/icon-menu.svg"} alt="menu icon"/>
            <h1>sneakers</h1>

            <div className={styles.navigationContainer}>

                <button style={{'--left': '15px', '--width': '68px'}}>Collections</button>
                <button style={{'--left': '112px', '--width': '29px'}}>Men</button>
                <button style={{'--left': '170px', '--width': '50px'}}>Women</button>
                <button style={{'--left': '250px', '--width': '38px'}}>About</button>
                <button style={{'--left': '320px', '--width': '48px'}}>Contact</button>

            </div>

            <div>
                <img src={"../SVGs/icon-cart-grey.svg"} alt="cart icon"
                     onClick={() => setShowCart(prevState => !prevState)}/>
                {markValue !== 0 && <p>{markValue}</p>}
                {showCart && <Cart setShowCart={setShowCart}/>}


            </div>

            <img className={styles.profileImage} src={"../images/image-avatar.png"} alt=""/>

        </nav>)

}

export default Navbar;