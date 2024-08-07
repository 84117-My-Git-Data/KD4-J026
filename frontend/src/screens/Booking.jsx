import { useState } from "react"
import Footer from "../components/footer1";
import Navbar from "../components/navbar"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

function Booking() {
    const [vehicleNo, setVehicleNo] = useState('')
    const [date, setDate] = useState('')
    const [parkingCostperHour, setParkingCostperHour] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [slot, setSlot] = useState('')
    const [totalCost, setTotalCost] = useState('')

    const navigate = useNavigate()

    const onBooking = () => {
        if (vehicleNo.length == 0){
            toast.error('Please enter Vehicle No')
        } else if (date.length == 0) {
            toast.error('please enter Date')
        } else if (parkingCostperHour.length == 0){
            toast.error('please enter Parking Cost per Hour')
        } else if (vehicleType.length == 0){
            toast.error('please enter Vehicle Type')
        } else if (startTime.length == 0){
            toast.error('please enter Start Time')
        } else if (endTime.length == 0){
            toast.error('please enter End Time')
        } else if (slot.length == 0){
            toast.error('please enter Slot')
        } else if (totalCost.length == 0){
            toast.error('please enter Total Age')
        } else{
            //call register API, check the status
            //if success go to the Login screen
            toast.success('Successfully register a new user')
            navigate('/login')
        }
    }

    return (<div className="container-fluid">
        <Navbar/>    
        <h2 className="page-header">Bookings</h2>
        <div className="row">
            <div className="col"></div>
            <div className="col">
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="">Vehicle No:</label>
                    <input onChange={(e)=>setVehicleNo(e.target.value)}
                    type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Date</label>
                    <input 
                    onChange={(e)=>setDate(e.target.value)}
                    type="date" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">ParkingCostPerHour</label>
                    <input onChange={(e)=>setParkingCostperHour(e.target.value)}
                    type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Vehicle Type</label>
                    <input onChange={(e)=>setVehicleType(e.target.value)}
                    type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Start Time</label>
                    <input onChange={(e)=>setStartTime(e.target.value)}
                    type="time" id="start-time" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">End Time</label>
                    <input onChange={(e)=>setEndTime(e.target.value)}
                    type="time" id="start-time" className="form-control"/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="">Slot</label>
                    <input 
                    onChange={(e)=>setSlot(e.target.value)}
                    type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Total Cost</label>
                    <input 
                    onChange={(e)=>setTotalCost(e.target.value)}
                    type="number" className="form-control"/>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={onBooking} className="btn btn-success">Book Slot</button>
                </div>    
            </div>
            </div>
            <div className="col"></div>
        </div>
    </div>
    )
}

export default Booking