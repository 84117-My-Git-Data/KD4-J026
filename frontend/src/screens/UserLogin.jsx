import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function UserLogin() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isEmailEmpty, setEmailEmpty] = useState(false)
    const [isPassowrdEmpty, setPasswordEmpty] = useState(false)

    const onLogin = () => {
        if (email.length == 0) {
            toast.error('please enter email')
        } else if (password.length == 0) {
            toast.error('please enter password')
        } else{
            //call login API and check its status
            // go to home screen
            navigate('/home')
        }
    }


    return (<div>
        <Navbar/>
        <br />
        <br />
        <br />
        <div className="container mt-5 ">
        <h2 className="page-header">UserLogin</h2>
       
        <div className="row">
        <div className="col-3"></div>
        <div className="col">
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input onChange={(e)=> {
                        if (e.target.value.length == 0) {
                            setEmailEmpty(true)
                        } else {
                            setEmailEmpty(false)
                        }
                        setEmail(e.target.value)
                    }}
                    type="email" className="form-control"/>
                    {isEmailEmpty && (
                    <p style={{ color: 'red'}}>Email is mandatory</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input onChange={(e)=> {
                        if (e.target.value.length == 0) {
                            setPasswordEmpty(true)
                        } else {
                            setPasswordEmpty(false)
                        }
                        setPassword(e.target.value)}}
                    type="password" className="form-control"/>
                    {isPassowrdEmpty && (
                    <p style={{ color: 'red'}}>Password is mandatory</p>
                    )}
                </div>
                <div className="mb-3">
                    <div>
                        Don't have an account ? <Link to='/register'>UserRegister</Link>
                    </div>
                    <button onClick={onLogin} className="btn btn-success">Login</button>
                </div>
            </div>
        </div>
        <div className="col-3"></div>
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
    </div>

    );
}

export default UserLogin