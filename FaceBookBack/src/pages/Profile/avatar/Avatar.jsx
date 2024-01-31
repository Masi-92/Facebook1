import style from "./avatar.module.scss"

const Avatar = ({avatar,name,job}) => {
  return (
    <div className={style.container}>
<img src={avatar} alt="" />
<h1>{name}</h1>
<p>{job}</p>

    </div>
  )
}

export default Avatar