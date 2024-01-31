import style from "./about.module.scss"

const About = ({about}) => {
  return (
    <div className={style.container}>
<h1>About</h1>
<p>{about}</p>

    </div>
  )
}

export default About