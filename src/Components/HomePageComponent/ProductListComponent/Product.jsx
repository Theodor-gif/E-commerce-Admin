import Style from './Style.module.css'
import Like from '../../../assets/NavBar-Images/Favorite-icon.png'
import ArrowLeft from '../../../assets/Arrow-Images/ArrowLeft-icon.png'
import ArrowRight from '../../../assets/Arrow-Images/ArrowRight-icon.png'
import { useState } from 'react'

function Product(props){


    const [current, setCurrent] = useState(0)
    const visible = 3;

    const watches = props.products.filter(element => element.tags[0] === "watches");

    function handleLeft() {
    if (current > 0) {
        setCurrent(prev => prev - 1)
    }
}

    function handleRight() {
    if (current + visible < watches.length) {
        setCurrent(prev => prev + 1)
    }
}


    return(
        <div className={Style.container}>
            <h2 className={Style.nameContainer}>NEW IN</h2>
            <div className={Style.productImage}>
                <button className={Style.arrow} type='button' onClick={handleLeft}>
                    <img src={ArrowLeft} alt=''/>
                </button>
                {props.products.filter(element => element.tags[0] === "watches")
                    .slice(current, current + visible).map((element) => (
                        <div className={Style.main} key={element.id}>
                            <button className={Style.likeButton} type='button'>
                                <img src={Like} alt=''/>
                            </button>
                            <img src={element.thumbnail} alt=''/>
                            <h2>{element.title}</h2>
                            <p>{element.price} &euro;</p>
                            <button className={Style.OrderButton} type='button'>ADD TO CART</button>
                        </div>
                ))}
                <button className={Style.arrow} type='button' onClick={handleRight}>
                    <img src={ArrowRight} alt=''/>
                </button>
            </div>
        </div>
    );
}

export default Product