import Style from './Style.module.css'
import imageOne from '../../../assets/Banner-Images/BannerTwentyOne-Image.jpeg'
import imageTwo from '../../../assets/Banner-Images/Banner.jpg'


function Fashion(){
    return(
        <div className={Style.container}>
            <img src={imageOne} alt=''/>
            <img src={imageTwo} alt=''/>
        </div>
    );
}

export default Fashion