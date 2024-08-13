import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Navbar from "../components/navbar"
import { registerUser } from "../services/user"

function UserRegister() {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [Gender, setGender] = useState('')
    const [Age, setAge] = useState('')
    
    const navigate = useNavigate()

    const onRegister = async () => {
        debugger;
        if (FirstName.length == 0){
            toast.error('Please enter First name')
        } else if (LastName.length == 0) {
            toast.error('please enter last name')
        } else if (Email.length == 0){
            toast.error('please enter email')
        } else if (Password.length == 0){
            toast.error('please enter password')
        } else if (confirmPassword.length == 0){
            toast.error('please enter confirm password')
        } else if (Password != confirmPassword){
            toast.error('password and confirmpassword does not match')
        }else if (PhoneNumber.length == 0){
            toast.error('please enter phone number')
        } else if (Gender.length == 0){
            toast.error('please enter gender')
        } else if (Age.length == 0){
            toast.error('please enter age')
        } else{
            //call register API, check the status
            //if success go to the Login screen
            debugger;
            const result = await registerUser(FirstName, LastName, Email, Password, PhoneNumber, Gender, Age)
            if (result== 'success') {
                toast.success('Successfully register a new user')
                navigate('/login')
            } else{
                toast.error(result['error'])
            }
           
        }
    }
    
    return (<div>
        <Navbar/>
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
                            <input onChange={(e)=>setPhoneNumber(e.target.value)}
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