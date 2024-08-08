import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/hash.jpg';

function Navbar() {

    const navigate = useNavigate();

    const handleUserLogin = () => {
      navigate('/login');
    };

    const handleAdminLogin = () => {
      navigate('/adminlogin');
    };


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                      src={logo}
                      alt="Logo"
                      width="30"
                      height="30"
                      style={{
                        borderRadius: '50%',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        marginRight: '10px' // Adjust the margin as needed
                      }}
                    />
                    HASH Parking
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/adminhome' className="nav-link" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/parkingcost' className="nav-link" aria-current="page">
                                ParkingCost
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/booking' className="nav-link" aria-current="page">
                                BookingDetails
                            </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link to='/login' className="nav-link" aria-current="page">
                                Logout
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* ms-auto pushes the items to the right */}
                        <li className="nav-item">
                            <Link to='/register' className="nav-link">
                                Register
                            </Link>
                        </li>
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Login
                            </button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item" type="button" onClick={handleUserLogin}>User</button></li>
                                <li><button class="dropdown-item" type="button" onClick={handleAdminLogin}>Admin</button></li>

                            </ul>

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;