import Upload from '../../assets/Arrow-Images/UploadWhite-image.png'
import Style from './Style.module.css'
import Logo from '../../assets/Logo-Images/LogoOne-icon.png'
import { Link } from 'react-router-dom'


function UserPage(){
    return(
        <div className={Style.container}>

            

            <div className={Style.formContainer}>
                <form className={Style.form}>
                    <label htmlFor="name"></label>
                    <input id='name' type='text' name='firstName' placeholder="First Name" autoComplete="on" required/>
                    

                    <label htmlFor="lastName"></label>
                    <input id='lastName' type='lastName' name='email' placeholder='Last Name' autoComplete="on" required/>
                  

                    <label htmlFor="email"></label>
                    <input id='email' type='email' name='email' placeholder='Email' autoComplete="on" required/>
                    

                    <label htmlFor='password'></label>
                    <input id='password' type='password' name='password' placeholder="Password" autoComplete="on" required/>
                   

                    <label htmlFor='confirmPassword'></label>
                    <input id='confirmPassword' type='password' name='confirmPassword' placeholder="Confirm Password" autoComplete="on" required/>
                    

                    <label htmlFor='image' className={Style.image}>
                        <img src={Upload} alt='' width='50'/>
                        <p className={Style.file}>Upload Profile Photo</p>
                    </label>
                    <input id='image' type='file' name='image' accept="image/*" required style={{display: "none"}}/>
                    <div className={Style.btnContainer}>
                        <Link to='/'>
                            <button className={Style.Btn} type='button'>REGISTER</button> {/* type='submit' next step */}
                        </Link>
                    </div>
            
                    
                    
                </form>
                <h3 className={Style.log}>Already have an account? <span>Log In Here</span></h3>
            </div>
            
    </div>
    );
}

export default UserPage