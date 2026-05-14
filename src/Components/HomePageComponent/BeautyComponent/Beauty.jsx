import Style from './Style.module.css'
import Like from '../../../assets/NavBar-Images/Favorite-icon.png'
import ArrowLeft from '../../../assets/Arrow-Images/ArrowLeft-icon.png'
import ArrowRight from '../../../assets/Arrow-Images/ArrowRight-icon.png'
import { useState } from 'react'

function Beauty(props){
    
    const [current, setCurrent] = useState(0)
    const visible = 3;

    const beauty = props.products.filter(element => element.tags[0] === "beauty");
    const fragrances = props.products.filter(element => element.tags[0] === "fragrances");

    const total = [...beauty, ...fragrances];

    function handleLeft() {
    if (current > 0) {
        setCurrent(prev => prev - 1)
    }
}

    function handleRight() {
    if (current + visible < total.length) {
        setCurrent(prev => prev + 1)
    }
}



    return(
        <div className={Style.container}>
                    <h2 className={Style.nameContainer}>BEAUTY</h2>
                    <div className={Style.productImage}>
                        <button className={Style.arrow} type='button' onClick={handleLeft}>
                            <img src={ArrowLeft} alt=''/>
                        </button>
                        {total.slice(current, current + visible).map((element) => (
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

export default Beauty