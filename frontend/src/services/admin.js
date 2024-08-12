import axios from "axios";
import {createUrl} from "./utils";

export async function loginAdmin(email, password){
    try{
        const url = createUrl('api/AdminLogin/AdminLogin')
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