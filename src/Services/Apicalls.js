import axios from "axios";

export const registerMe=(register)=>{
    console.log(register,'soy register')
    return axios.post("http://localhost:7000/user",register)
}

