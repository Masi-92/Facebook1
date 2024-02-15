import myApi from "./api"


export const getProfile = (id)=>{
return myApi.get("/auth/getProfile",id)
}

export const editeProfile = (body)=>{

return myApi.put("/auth/edit",body)
}