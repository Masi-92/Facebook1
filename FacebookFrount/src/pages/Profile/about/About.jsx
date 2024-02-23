
import style from "./about.module.scss"
const About = ({description}) => {


  
  
  return (
    <div className={style.container}>
<h1>About</h1>
<p>{description}</p>

    </div>
  )
}

export default About