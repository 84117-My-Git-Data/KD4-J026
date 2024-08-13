import axios from "axios";
import { createUrl, createError } from "./utils";

export async function getAllBookings(){
    try{
        debugger
        const url = createUrl('api/Booking')
        const response = await axios.get(url)
        console.log(response.data);
        return response
    } catch(ex) {
        return createError(ex)
    }
}