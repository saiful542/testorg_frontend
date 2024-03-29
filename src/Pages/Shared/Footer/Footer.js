import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='w-100'>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container ">
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: 0.2, animationName: "fadeInLeft" }} >
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p className=''>Don't miss any updates of our new templates and extensions.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"></input>
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{ display: "none" }}></p>
                                        <p className="mchimp-sucmessage" style={{ display: " none" }}></p>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: 0.6, animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="#">FAQ</Link></li>
                                        <li><Link to="#">Documentation</Link></li>
                                        <li><Link to="#">Support Policy</Link></li>
                                        <li><Link to="#">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: "visible", animationDelay: 0.8, animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18 mb-2">Team Solutions</h3>
                                    <div className="f_social_icon ">
                                        <Link to="#" className="fab fa-facebook"></Link>
                                        <Link to="#" className="fab fa-twitter"></Link>
                                        <Link to="#" className="fab fa-linkedin"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <p className="mb-0 mt-4 f_400 text-center">© TestOrg. 2022 All rights reserved.</p>
                    </div>
                </div>
            </footer >





        </div >
    );
};



export default Footer;

