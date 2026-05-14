import { useState, useEffect } from 'react'

import Style from './Style.module.css'
import arrowLeft from '../../../assets/Arrow-Images/ArrowLeft-icon.png'
import arrowRight from '../../../assets/Arrow-Images/ArrowRight-icon.png'
import imageOne from '../../../assets/Banner-Images/BannerThirteen-Image.png'
import imageTwo from '../../../assets/Banner-Images/BannerTwentySix-Image.jpeg'
import imageThree from '../../../assets/Banner-Images/BannerTwentyFive.jpeg'
import imageFour from '../../../assets/Banner-Images/BannerTwentyFour-Image.jpeg'
import imageFive from '../../../assets/Banner-Images/BannerTree-Imga.png'
import imageSix from '../../../assets/Banner-Images/BannerEleven-Image.png'

function Banner(){

    const [banner, setBanner] = useState([
        imageOne,
        imageSix,
        imageTwo,
        imageFive,
        imageFour,
        imageThree
    ]);

    const [current, setCurrent] = useState(0);

    function handleLeft(){
        if(current > 0){
            setCurrent( current - 1)
        }
    };

    function handleRight(){
        if(current < banner.length){
            setCurrent( current + 1)
        }
        if(current === banner.length - 1 ){
            setCurrent(banner.length - 1)
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % banner.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className={Style.container}>
            <button type='button' className={Style.arrowLeft} onClick={handleLeft}>
                <img src={arrowLeft} alt=''/>
            </button>
            <img src={banner[current]} alt='' className={Style.mainImage}/>
            <button type='button' className={Style.arrowRight} onClick={handleRight}>
                <img src={arrowRight} alt=''/>
            </button>
        </div>
    );
}

export default Banner