import { jwtDecode } from "jwt-decode";

export const getUserId = ()=>{
const token = localStorage.getItem("token")
const decodeToken = jwtDecode(token)
return decodeToken.id

}