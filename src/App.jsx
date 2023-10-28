import styles from './styles/App.module.css'
import Navbar from "./components/Navbar.jsx";
import ImagePreviewer from "./components/ImagePreviewer.jsx";
import MainComponent from "./components/MainComponent.jsx";
import {createContext, useState} from "react";

export const CartContext = createContext(null);
export const SetCartContext = createContext(null);

function App() {

    const [cart, setCart] = useState({});

    return (
        <div className={styles.App}>
            <CartContext.Provider value={cart}>
                <SetCartContext.Provider value={setCart}>
                    <Navbar/>
                    <div>
                        <ImagePreviewer/>
                        <MainComponent/>
                    </div>
                </SetCartContext.Provider>
            </CartContext.Provider>
        </div>
    )
}

export default App
