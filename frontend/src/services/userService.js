import axios from 'axios';


const BASE_URL = import.meta.env.VITE_SERVER;

async function login(args) {
    const {email, password} = args;

    return await axios.post(BASE_URL + "login/post", {
        email,
        password
    }).then((response) => {
        return response;
    }).catch((err) => {
        return err.response;
    });
    //turn request_response;
}

async function register(args){
    const {name, email, password} = args;

    return await axios.post(BASE_URL + "post-registration",  {
        name,
        email,
        password
    }).then((response)=>{
        return response
    }).catch((err)=>{
        return err.response;
    })
}

async function resetPasswordLink(args){
    const {email} = args;
    return await axios.post(BASE_URL + "forgot-password",{
        email
    }).then((response)=>{
        return response
    }).catch((err)=>{
        return err.response;
    })
}
async function updatePassword(args){
    const {password, password_confirmation, token} = args;

    return await axios.post(BASE_URL + "reset-password/" + token,{
        password,
        password_confirmation
    }).then((response)=>{
        return response
    }).catch((err)=>{

        return err.response;
    })
}

export const userService = {
    login,
    register,
    updatePassword,
    resetPasswordLink
}