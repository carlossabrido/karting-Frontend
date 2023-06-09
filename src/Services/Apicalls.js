import axios from "axios";

export const registerMe=(register)=>{
    console.log(register,'soy register')
    return axios.post("http://localhost:7000/user",register)
}
export const logMe=(credentials)=>{
    console.log(credentials,'soy credentials')
    return axios.post("http://localhost:7000/user/login",credentials)
}

export const infoProfile=async(credentials)=>{
    try{
        let config={
            header:{
                Authorization: `Bearer ${credentials.bearer}`
            }
        }
        const response= await axios.get(`http://localhost:7000/user ${credentials.token.id}`,config)
         return response.data
    }catch (error) {
        console.log(error);
      }   
}
