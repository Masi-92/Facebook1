import myApi from "./api";


export const register =  (body) => {
    return myApi.post("/auth/register",body)

  };

 export const login = (email,password)=>{
return myApi.post("/auth/login",{email,password})

  }

  