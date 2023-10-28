import styles from '../styles/CartItem.module.css';
import {CartContext} from '../App';
import {SetCartContext} from '../App';
import {useContext} from "react";
function CartItem(props) {

    // const key = props.id;
    const cart = useContext(CartContext);
    const setCart = useContext(SetCartContext);


    function handleDelete(){

        const cartCopy = {...cart};
        
        for(let key in cartCopy){

            if(cartCopy[key]?.id === props.id){
                delete cartCopy[key];
            }

        }
        
        setCart(cartCopy);
    }

    return (
        <div className={styles.CartItem}>

            <img src={props.image}/>
            <div>
                <p>{props.description}</p>
                <p>${props.price} x {props.numOfItems}{" "}
                    <span>${(parseFloat(props.price) * parseFloat(props.numOfItems)).toFixed(2)}</span>
                </p>
            </div>

            <button onClick={handleDelete}>
                <img src={"../SVGs/icon-delete.svg"}/>
            </button>

        </div>
    );
}

export default CartItem;