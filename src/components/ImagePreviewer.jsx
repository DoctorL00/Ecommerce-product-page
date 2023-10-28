import styles from '../styles/ImagePreviewer.module.css';
import {useState} from "react";

function ImagePreviewer() {

    const [index, setIndex] = useState(1);

    function handleIncrement() {
        if (index === 4) {
            setIndex(1);
            return;
        }

        setIndex(prevState => prevState + 1);

    }

    function handleDecrement() {
        if (index === 0) {
            setIndex(4);
            return;
        }

        setIndex(prevState => prevState - 1);
    }


    return (

        <div className={styles.imagePreviewer}>

            <button onClick={handleDecrement}>
                <img src={"../SVGs/icon-previous.svg"} alt="previous image icon"/>
            </button>

            <img src={`../images/image-product-${index}.jpg`} alt=""/>

            <button onClick={handleIncrement}>
                <img src={"../SVGs/icon-next.svg"} alt="next image icon"/>
            </button>

            <div className={styles.imagesThumbnails}>

                <div style={{'border': index === 1 ? '3px solid var(--orange)' : 'none'}}>
                    <img src={'../images/image-product-1-thumbnail.jpg'} alt={''} onClick={() => setIndex(1)}
                         style={
                             {
                                 'filter': index === 1 ? 'opacity(30%)' : ''
                             }
                         }
                    />
                </div>

                <div style={{'border': index === 2 ? '3px solid var(--orange)' : 'none'}}>
                    <img src={'../images/image-product-2-thumbnail.jpg'} alt={''} onClick={() => setIndex(2)}
                         style={
                             {
                                 'filter': index === 2 ? 'opacity(30%)' : ''
                             }
                         }
                    />
                </div>

                <div style={{'border': index === 3 ? '3px solid var(--orange)' : 'none'}}>
                    <img src={'../images/image-product-3-thumbnail.jpg'} alt={''} onClick={() => setIndex(3)}
                         style={
                             {
                                 'filter': index === 3 ? 'opacity(30%)' : ''
                             }
                         }
                    />
                </div>

                <div style={{'border': index === 4 ? '3px solid var(--orange)' : 'none'}}>
                    <img src={'../images/image-product-4-thumbnail.jpg'} alt={''} onClick={() => setIndex(4)}
                         style={
                             {
                                 'filter': index === 4 ? 'opacity(30%)' : ''
                             }
                         }
                    />
                </div>

            </div>


        </div>

    )

}

export default ImagePreviewer;