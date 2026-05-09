
import Style from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div>
      <h1 className= {Style.header}> Hello World</h1>
      <h2 className= {Style.h2}>About</h2>
      <ul className= {Style.list}> 
        <li>
            Home
        </li>
      </ul>
    </div>
  )
}
