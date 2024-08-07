import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const footerStyle = {
        backgroundColor: 'black', // Dark background color
        color: '#fff', // White text color
        padding: '20px 0',
        textAlign: 'center',
    };

    const socialLinkStyle = {
        margin: '0 10px',
    };

    const nativeAppsLinkStyle = {
        display: 'inline-block',
        margin: '10px',
    };

    return (
        <footer style={footerStyle}>
            <div>
                <div>
                    <a
                        href="https://www.facebook.com/Parkopedia/"
                        style={socialLinkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FFFFFF"
                                d="M15 0C6.72 0 0 6.72 0 15c0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.3-6.72-15-15-15zm3.03 15.27h-2v7.27h-2.7v-7.27H11.5v-2.5h1.82v-1.48c0-2.06.55-3.3 2.95-3.3h2v2.5h-1.24c-.94 0-1 .36-1 1v1.26h2.26l-.27 2.5z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com/Parkopedia/"
                        style={socialLinkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FFFFFF"
                                d="M15 0C6.73 0 0 6.73 0 15s6.73 15 15 15 15-6.73 15-15S23.27 0 15 0zm6.02 12.25v.38c0 3.93-3 8.47-8.46 8.47-1.68 0-3.24-.5-4.56-1.34.23.03.47.04.7.04 1.4 0 2.7-.47 3.7-1.27-1.3-.03-2.4-.9-2.77-2.07.18.04.36.05.55.05.28 0 .54-.02.8-.1-1.37-.26-2.4-1.46-2.4-2.9v-.04c.4.22.86.35 1.35.37-.8-.53-1.32-1.45-1.32-2.48 0-.54.15-1.05.4-1.5 1.48 1.8 3.67 3 6.14 3.12-.05-.22-.08-.45-.08-.68 0-1.66 1.34-3 2.98-3 .86 0 1.63.37 2.17.95.7-.13 1.32-.38 1.9-.72-.22.7-.7 1.28-1.3 1.65.6-.08 1.17-.24 1.7-.47-.4.6-.9 1.13-1.48 1.55z"
                            ></path>
                        </svg>
                    </a>
                </div>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                        <li><Link to="/aboutus" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
                        <li><Link to="/contactus" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
                        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Jobs</Link></li>
                        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</Link></li>
                        <li><a href="https://business.parkopedia.com" style={{ color: '#fff', textDecoration: 'none' }}>Industry Solutions</a></li>
                        <li><Link to="/registration" style={{ color: '#fff', textDecoration: 'none' }}>News</Link></li>
                        <li><Link to="/registration" style={{ color: '#fff', textDecoration: 'none' }}>Policies</Link></li>
                        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Terms</Link></li>
                    </ul>
                </nav>
                <div>
                    <a
                        href="http://ad.apps.fm/CBedi7ONYDsMV2wLPwEGEPE7og6fuV2oOMeOQdRqrE08504zaejuG8p5BBL279eLKMxLxydyMlRZkx3uhXAd2cdjud_yFYnXQ-BhDw0XMPI"
                        style={nativeAppsLinkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="path/to/ios-icon.png" alt="Download on the App Store" />
                    </a>
                    <a
                        href="http://ad.apps.fm/Z_KwwQEWnaCiOJch4jz-8l5KLoEjTszcQMJsV6-2VnHFDLXitVHB6BlL95nuoNYf1rnQogx8Y8K_r2Zwk7TyqwWbob7HfTgCRliuUfbJV_gJgPqxQLqo0SQMfMgpZYMQYyOX5sky661LiOCpkbUH-Q"
                        style={nativeAppsLinkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="path/to/android-icon.png" alt="Get it on Google Play" />
                    </a>
                </div>
                <span>
                    © 2024 Parkopedia - All rights reserved.
                </span>
            </div>
            <div></div>
            <div></div>
        </footer>
    );
}

export default Footer;
