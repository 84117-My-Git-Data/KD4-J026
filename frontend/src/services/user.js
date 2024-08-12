import axios from "axios";
import { createUrl, createError } from "./utils";

export async function registerUser(firstname, lastname, email, password, phoneNo, gender, age){
    try{
        const url = createUrl('api/User/registeruser')
        const body = {
            firstname, 
            lastname, 
            email, 
            password, 
            phoneNo, 
            gender, 
            age
        }
        const response = await axios.post(url,body)
        return response.data
    } catch(ex) {
        return createError(ex)
    }
}

export async function loginUser(email, password){
    try{
        const url = createUrl('api/Login/userlogin')
        const body = { 
            email, 
            password
        }
        const response = await axios.post(url,body)
        return response.data
    } catch(ex) {
        return createError(ex)
    }
}