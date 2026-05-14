import { useState } from 'react'
import Style from './Style.module.css'

import arrowLeft from '../../../assets/Arrow-Images/ArrowLeft-icon.png'
import arrowRight from '../../../assets/Arrow-Images/ArrowRight-icon.png'
import imageOne from '../../../assets/Brand-Logos/pngwing.com (10).png'
import imageTwo from '../../../assets/Brand-Logos/pngwing.com (14).png'
import imageThree from '../../../assets/Brand-Logos/pngwing.com (15).png'
import imageFour from '../../../assets/Brand-Logos/pngwing.com (17).png'
import imageFive from '../../../assets/Brand-Logos/pngwing.com (18).png'
import imageSix from '../../../assets/Brand-Logos/pngwing.com (19).png'
import imageSeven from '../../../assets/Brand-Logos/pngwing.com (20).png'
import imageEight from '../../../assets/Brand-Logos/pngwing.com (21).png'
import imageNine from '../../../assets/Brand-Logos/pngwing.com (22).png'
import imageTen from '../../../assets/Brand-Logos/pngwing.com (23).png'
import imageEleven from '../../../assets/Brand-Logos/pngwing.com (24).png'


function Brand(){

    const [brands, setBrands] = useState([
        {id: 1, image: imageOne},
        {id: 2, image: imageTwo},
        {id: 3, image: imageThree},
        {id: 4, image: imageFour},
        {id: 5, image: imageFive},
        {id: 6, image: imageSix},
        {id: 7, image: imageSeven},
        {id: 8, image: imageEight},
        {id: 9, image: imageNine},
        {id: 10, image: imageTen},
        {id: 11, image: imageEleven}
    ])

    const [current, setCurrent] = useState(0);
    const visible = 5;

    function handleLeft() {
        if (current > 0) {
            setCurrent(prev => prev - 1);
        }
    }

    function handleRight() {
        if (current + visible < brands.length) {
            setCurrent(prev => prev + 1);
        }
    }
    return(
        <div className={Style.container}>
            <h2>OUR BRANDS</h2>
            <div>
                <button type="button" onClick={handleLeft}>
                    <img src={arrowLeft} alt=''/>
                </button>
                <div>
                    {brands.slice(current, current + visible).map((element) => (
                        <img key={element.id} src={element.image} alt='' width={50}/>
                    ))}
                </div>
                <button type="button" onClick={handleRight}>
                    <img src={arrowRight} alt=''/>
                </button>
            </div>
        </div>
    );
}

export default Brand