import axios from "axios";

export const registerMe=(register)=>{
    console.log(register,'soy register')
    return axios.post("http://localhost:7000/user",register)
}
export const logMe=(credentials)=>{
    console.log(credentials,'soy credentials')
    return axios.post("http://localhost:7000/user/login",credentials)
}

