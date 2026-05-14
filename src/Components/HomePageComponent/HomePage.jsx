
import Logo from './LogoComponent/Logo'
import NavBar from './NavBarComponent/NavBar'
import Banner from './BannerComponent/Banner'
import Brand from './BrandComponent/Brand'
import FashionOne from './FashionOneComponent/Fashion'
import NewIn from './ProductListComponent/Product'
import Slides from './SlidesComponent/Slide'
import Men from './MenComponent/Men'
import Intro from './IntroFragrancesComponent/Intro'
import Beauty from './BeautyComponent/Beauty'
import Style from './Style.module.css'


export default function HomePage(props) {
  return (
    <div className={Style.container}>
      <Logo/>
      <NavBar/>
      <Banner/>
      <Brand/>
      <FashionOne/>
      <NewIn products={props.data}/>
      <Slides/>
      <Men products={props.data}/>
      <Intro/>
      <Beauty products={props.data}/>
    </div>
  )
}
