import axios from "axios";


const myApi= axios.create({
baseURL:
"http://localhost:5000/api",
headers:{
    token:localStorage.getItem("token")
}
})


export default myApi