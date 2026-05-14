import Style from './Style.module.css'
import LogoImage from '../../../assets/Logo-Images/LogoOne-icon.png'
import SearchImage from '../../../assets/NavBar-Images/Search-icon.png'
import UserImage from '../../../assets/NavBar-Images/AdminUser-icon.png'
import FavoriteImage from '../../../assets/NavBar-Images/Favorite-icon.png'
import ShopImage from '../../../assets/NavBar-Images/ShoppingBag-icon.png'
import { Link } from 'react-router-dom'
import PopUp from './PopUpComponent/PopUp'

import  { useState } from 'react'

function Logo(){

    const [menu, setMenu] = useState(false)


    return(
        <div className={Style.container}>
            <img src={LogoImage} alt='web page logo'/>
            <div className={Style.inputContainer}>
                <label htmlFor='user'>
                    <img src={SearchImage} alt='search icon'/>
                </label>
                <input id='user' type='text' name='user' placeholder='Search Here'/>
            </div>
            <div className={Style.userContainer}>
                {/*  This ones must to be later Links */}
                <Link to='/user'>
                    <button type='button' className={Style.btn}>
                        <img src={UserImage} alt='' className={Style.image}/>
                    </button>
                </Link>
                
                <Link to='/user'>
                    <button type='button' className={Style.btn}>
                        <img src={FavoriteImage} alt='' className={Style.image}/>
                    </button>
                </Link>

                
                    <button type='button' className={Style.btn} onClick={() => setMenu(true)}>
                        <img src={ShopImage} alt='' className={Style.image}/>
                    </button>


            {menu && <PopUp onClose={() => setMenu(false)} />}
             

            </div>
        </div>
    );
}

export default Logo