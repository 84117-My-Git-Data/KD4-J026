import axios from "axios";
import { createUrl, createError } from "./utils";

export async function registerUser(FirstName, LastName, Email, Password, PhoneNumber, Gender, Age){
    debugger;

    try{
        const url = createUrl('api/User/registeruser')
        const body = {
            FirstName, 
            LastName, 
            Email, 
            Password, 
            PhoneNumber, 
            Gender, 
            Age
        }
        const response = await axios.post(url,body)
        console.log(response.data);
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