import Style from './Style.module.css'
import Cancel from '../../../../assets/NavBar-Images/Cancel-image.png'

function PopUp(props) {
    return (
        <div className={Style.overlay} onClick={props.onClose}>
            <div className={Style.popUp} onClick={e => e.stopPropagation()}>
                <div className={Style.header}>
                    <h2>SHOPPING BAG</h2>
                    <button type='button' className={Style.cancelBtn} onClick={props.onClose}>
                        <img src={Cancel} alt='close' />
                    </button>
                </div>
                <div className={Style.info}>
                    {/* cart items go here */}
                    <p>YOU HAVE NO ITEMS IN YOUR SHOPPING BAG</p>
                </div>
            </div>
        </div>
    );
}

export default PopUp