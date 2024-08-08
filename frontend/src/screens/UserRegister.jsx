import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Unavbar from "../components/unavbar"

function UserRegister() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    
    const navigate = useNavigate()

    const onRegister = () => {
        if (firstName.length == 0){
            toast.error('Please enter First name')
        } else if (lastName.length == 0) {
            toast.error('please enter last name')
        } else if (email.length == 0){
            toast.error('please enter email')
        } else if (Password.length == 0){
            toast.error('please enter password')
        } else if (confirmPassword.length == 0){
            toast.error('please enter confirm password')
        } else if (Password != confirmPassword){
            toast.error('password and confirmpassword does not match')
        }else if (phoneNo.length == 0){
            toast.error('please enter phone number')
        } else if (gender.length == 0){
            toast.error('please enter gender')
        } else if (age.length == 0){
            toast.error('please enter age')
        } else{
            //call register API, check the status
            //if success go to the Login screen
            toast.success('Successfully register a new user')
            navigate('/login')
        }
    }
    
    return (<div>
        <Unavbar/>
        <h2 className="page-header">UserRegister</h2>
        <div className="row">
        <div className="col"></div>
        <div className="col">
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="">First Name</label>
                    <input onChange={(e)=>setFirstName(e.target.value)}
                    type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Last Name</label>
                    <input 
                    onChange={(e)=>setLastName(e.target.value)}
                    type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}
                    type="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}
                    type="password" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)}
                    type="password" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Phone No</label>
                    <input onChange={(e)=>setPhoneNo(e.target.value)}
                    type="tel" className="form-control"/>
                </div> 
                <div className="mb-3">
                <label htmlFor="gender">Gender:</label> {/* Add gender select dropdown */}
                    <select
                      onChange={(e)=>setGender(e.target.value)}  
                      id="gender"
                      name="gender"
                      className="form-control"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Age</label>
                    <input 
                    onChange={(e)=>setAge(e.target.value)}
                    type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <div>
                        Already have an Account ? <Link to='/'>UserLogin</Link>
                    </div>
                    <button onClick={onRegister} className="btn btn-success">Register</button>
                </div>
            </div>
        </div>
        <div className="col"></div>
        </div>
    </div>
    )
}

export default UserRegister