import { MyAxios } from "../Services/UserService";
export const signUp=(user)=>{
    return MyAxios.post("/patient/register",user).then((response)=> response.data).catch(err => err);
};