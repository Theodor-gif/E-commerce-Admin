import Style from './Style.module.css'
import ImageOne from '../../../assets/Banner-Images/BannerTwenty-Image.jpeg'
import ImageTwo from '../../../assets/Banner-Images/BannerTwentyThree-Image.jpeg'
import ImageThree from '../../../assets/Banner-Images/BannerFour-Image.png'
import ImageFour from '../../../assets/Banner-Images/BannerTwentyTwo-Image.jpeg'

function Slides() {
    return (
        <div className={Style.container}>
            <img src={ImageOne} className={Style.img} alt='' />
            <img src={ImageTwo} className={Style.img} alt='' />
            <img src={ImageThree} className={Style.img} alt='' />
            <img src={ImageFour} className={Style.img} alt='' />
        </div>
    );
}

export default Slides