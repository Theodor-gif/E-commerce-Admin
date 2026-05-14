import ImageOne from '../../../assets/Banner-Images/BannerSeventeen-Image.png'
import ImageTwo from '../../../assets/Banner-Images/BannerEleven-Image.png'
import ImageThree from '../../../assets/Banner-Images/BannerTwo-Image.jpg'
import Style from './Style.module.css'


function Intro(){
    return(
        <div className={Style.container}>
            <h2>DOLCE&amp;GABBANA My Devotion Eau de Parfum Intense</h2>
            <p>The new fragrance redefines devotion with a deeply personal touch.</p>
            <h3>DISCOVER IT ONLY AT <span>VIBE & VANITY</span></h3>
            <div className={Style.imgContainer}>
                <img src={ImageOne} alt=''/>
                <img src={ImageTwo} alt=''/>
                <img src={ImageThree} alt=''/>
            </div>
        </div>
    );
}

export default Intro