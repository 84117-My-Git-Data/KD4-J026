import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
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
                            <Link to='/home' className="nav-link" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutus' className="nav-link" aria-current="page">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/booking' className="nav-link" aria-current="page">
                                Bookings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contactus' className="nav-link" aria-current="page">
                                Contact Us
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
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
