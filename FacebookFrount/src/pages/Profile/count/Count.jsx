
import style from "./count.module.scss"
const Count = ({comment,like,post}) => {



  return (
    <div className={style.container}>
<p>comment: <span >{comment}</span></p>
<p>like:<span>{like}</span></p>
<p>post: <span>{post}</span></p>


    </div>
  )
}

export default Count