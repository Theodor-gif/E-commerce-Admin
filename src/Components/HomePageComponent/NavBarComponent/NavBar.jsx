import { useState } from 'react'
import Style from './Style.module.css'

function NavBar(){

    const [beauty, setBeauty] = useState(false);
    const [fragrances, setFragrances] = useState(false);
    const [furniture, setFurniture] = useState(false);
    const [groceries, setGroceries] = useState(false);
    const [home, setHome] = useState(false);
    const [kitchen, setKitchen] = useState(false);
    const [laptop, setLaptop] = useState(false);
    const [men, setMen] = useState(false);
    const [mobile, setMobile] = useState(false);

    const style = {
        display: "flex",
        flexWrap: "wrap"
    };

    const styleTwo = {
        fontSize: "0.7rem"
    };

    return(
        <div className={Style.container}>
            <ul className={Style.categoryContainer}>
                <div
                    onMouseEnter={() => setBeauty(true)}
                    onMouseLeave={() => setBeauty(false)}
                >
                    <li>BEAUTY</li>
                    {beauty && 
                        <ul>
                            <li>MASCARA</li>
                            <li>EYESHADOW</li>
                            <li>FACE POWDER</li>
                            <li>LIPSTICK</li>
                            <li>NAIL POLISH</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setFragrances(true)}
                    onMouseLeave={() => setFragrances(false)}
                >
                    <li>FRAGRANCES</li>
                    {fragrances && 
                        <ul>
                            <li>PERFUMES</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setFurniture(true)}
                    onMouseLeave={() => setFurniture(false)}
                >
                    <li>FURNITURE</li>
                    {furniture && 
                        <ul>
                            <li>BEDS</li>
                            <li>SOFAS</li>
                            <li>BEDSIDE TABLES</li>
                            <li>OFFICE CHAIRS</li>
                            <li>BATHROOM</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setGroceries(true)}
                    onMouseLeave={() => setGroceries(false)}
                >
                    <li>GROCERIES</li>
                    {groceries && 
                        <ul style={style}>
                            <li style={styleTwo}>FRUITS</li>
                            <li style={styleTwo}>MEAT</li>
                            <li style={styleTwo}>PET SUPPLIES</li>
                            <li style={styleTwo}>COOKING ESSENTIALS</li>
                            <li style={styleTwo}>VEGETABLES</li>
                            <li style={styleTwo}>DAIRY</li>
                            <li style={styleTwo}>SEAFOOD</li>
                            <li style={styleTwo}>GRAINS</li>
                            <li style={styleTwo}>CONDIMENTS</li>
                            <li style={styleTwo}>DESSERTS</li>   
                            <li style={styleTwo}>BEVERAGES</li>
                            <li style={styleTwo}>COFFEE</li>
                            <li style={styleTwo}>HEALTH SUPPLEMENTS</li>
                            <li style={styleTwo}>HOUSEHOLD ESSENTIALS</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)}
                >
                    <li>HOME</li>
                    {home && 
                        <ul>
                            <li>SWING</li>
                            <li>PHOTO FRAME</li>
                            <li>ARTIFICIAL PLANTS</li>
                            <li>PLANT ACCESSORIES</li>
                            <li>LIGHTING</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setKitchen(true)}
                    onMouseLeave={() => setKitchen(false)}
                >
                    <li>KITCHEN</li>
                    {kitchen &&
                        <ul style={style}>
                            <li style={styleTwo}>UTENSILS</li>
                            <li style={styleTwo}>CUPS</li>
                            <li style={styleTwo}>BLENDERS</li>
                            <li style={styleTwo}>WORKS</li>
                            <li style={styleTwo}>CUTLERY</li>
                            <li style={styleTwo}>ORGANIZATION</li>
                            <li style={styleTwo}>TOUGS</li>
                            <li style={styleTwo}>CUTTING BOARDS</li>
                            <li style={styleTwo}>JUICERS</li>
                            <li style={styleTwo}>SLICERS</li>
                            <li style={styleTwo}>COOKTOPS</li>
                            <li style={styleTwo}>STORAGE</li>
                            <li style={styleTwo}>PANS</li>
                            <li style={styleTwo}>POTS</li>
                            <li style={styleTwo}>STRAINERS</li>
                            <li style={styleTwo}>GLASSES</li>
                            <li style={styleTwo}>GRATERS</li>
                            <li style={styleTwo}>ICE CUBE TRAYS</li>
                            <li style={styleTwo}>MICROWAVES</li>
                            <li style={styleTwo}>PLATES</li>
                            <li style={styleTwo}>TURNERS</li>
                            <li style={styleTwo}>TRAYS</li>
                            <li style={styleTwo}>BAKING</li>
                            <li style={styleTwo}>PEELERS</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setLaptop(true)}
                    onMouseLeave={() => setLaptop(false)}
                >
                    <li>LAPTOPS</li>
                    {laptop &&
                        <ul>
                            <li>APPLE</li>
                            <li>ASUS</li>
                            <li>HUAWEI</li>
                            <li>LENOVO</li>
                            <li>DELL</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setMen(true)}
                    onMouseLeave={() => setMen(false)}
                >
                    <li>MEN</li>
                    {men &&
                        <ul>
                            <li>MEN'S SHIRTS</li>
                            <li>ATHLETIC SHOES</li>
                            <li>SPORTS CLEATS</li>
                            <li>CASUAL SHOES</li>
                        </ul>
                    }
                </div>
                <div
                    onMouseEnter={() => setMobile(true)}
                    onMouseLeave={() => setMobile(false)}
                >
                    <li>MOBILE</li>
                    {mobile &&
                        <ul>
                            <li>SMART SPEAKERS</li>
                            <li>WIRELESS EARPHONES</li>
                        </ul>
                    }
                </div>
            </ul>
        </div>
    );
}

export default NavBar