import myApi from "./api"


export const getProfile = (id)=>{
return myApi.get("/auth/getProfile",id)
}