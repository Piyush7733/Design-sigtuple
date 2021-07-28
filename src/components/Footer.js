import React from 'react';

const Footer = () => {

    return (
        <div>
            <footer className="footer-area py-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="foter-logo">
                                <a className="navbar-brand m-0 p-0">
                                    <img src="assets/img/logo.png" alt="" />
                                </a>
                                <p className="text-description mb-0 mt-4">SigTuple builds intelligent screening solutions to aid diagnosis through AI-powered analysis of visual medical data.</p>
                            </div>
                            <div className="d-flex my-4 footer-three-menu">
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">AI100</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb mx-5">Shonit</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Shrava</a>
                            </div>
                            <div className="Copyright-area">
                                <p className="text-description mb-0">Copyright © 2015-2021</p>
                                <p className="text-description mb-0">SigTuple Technologies Private Limited.</p>
                                <p className="text-description mb-0">All Rights Reserved. | <b>Terms &amp; Conditions</b></p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex footer-menu">
                            <div className="flex-column d-flex justify-content-between h-100 mx-auto">
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">About Us</a><a href="" class="text-decoration-none text-danger fw-bold text-fwb">Products</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Research</a><a href="" class="text-decoration-none text-danger fw-bold text-fwb">Blog &amp; News</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Career</a><a href="" class="text-decoration-none text-danger fw-bold text-fwb">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-4 footer-address-area">
                            <div className="footer-address">
                                <p className="text-description mb-0 fw-bold">SigTuple Technologies Pvt. Ltd.</p>
                                <p className="text-description mb-0">First Floor, L-162, 14th Cross Rd, Sector 6, HSR Layout, Karnataka, 560102, India</p>
                                <p className="text-description mb-0 mt-4">Mon-Sat: 9 AM – 6 PM</p>
                                <p className="text-description mb-4">Sun: Closed</p>
                            </div>
                            <div className="social-media">
                                <ul className="mt-3 mb-3">
                                    <li>
                                        <a href="" ><img src="assets/img/icons/fb.svg" className="img-fluid" width="25" /></a>
                                            <a href="" className="mlr-20"><img src="assets/img/icons/youtube.svg" className="img-fluid" width="25" /></a>
                                                <a href=""><img src="assets/img/icons/in.svg" className="img-fluid" width="25" /></a>
                                    </li>
                                </ul>                        
                            </div>
                        </div>
                    </div>
                            </div>
            </footer>
                    </div>
                    )
}

                    export default Footer;