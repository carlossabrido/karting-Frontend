import axios from "axios";

export const registerMe=(register)=>{
    return axios.post("http://localhost:7000/user",register)
}
export const logMe=(credentials)=>{
    return axios.post("http://localhost:7000/user/login",credentials)
}

export const bringProfile=async(credentials)=>{
    
    try{
        let config={
            headers:{
                Authorization: `Bearer ${credentials.bearer}`
            }
        }
        const response= await axios.get(`http://localhost:7000/user/${credentials.token.id}`,config)
         return response.data
    }catch (error) {
        console.log(error);
      }   
}

export const bringAllProfiles=async(credentials)=>{
    console.log(credentials,'spy un duro')
    try{
        let config={
            headers:{
                Authorization: `Bearer ${credentials.bearer}`
            }
        }
        const response= await axios.get(`http://localhost:7000/user`,config)
         return response.data
    }catch (error) {
        console.log(error);
      }   
}


 