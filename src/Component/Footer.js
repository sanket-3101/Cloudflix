import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="position-relative">
                    <div className="header-top pt-80 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-sm-4">
                                    <div className="widget footer-sidebar">
                                        <ul>
                                            <li><a href="#"> About QloudFlix</a></li>
                                            <li><a href="#"> FAQ</a></li>
                                            <li><a href="#"> Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-4">
                                    <div className="widget footer-sidebar">
                                        <ul>
                                            <li><a href="#"> Dashboard</a></li>
                                            <li><a href="#"> Community</a></li>
                                            <li><a href="#"> Orders</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-4">
                                    <div className="widget footer-sidebar">
                                        <div className="social-list footer-social-list">
                                            <a href="#" target="_blank"><i className="fab fa-facebook-f toggleIcon header" /></a>
                                            <a href="#" target="_blank"><i className="fab fa-instagram toggleIcon header" /></a>
                                            <a href="#" target="_blank"><i className="fab fa-twitter toggleIcon header" /></a>
                                            <a href="#" target="_blank"><i className="fab fa-youtube toggleIcon header" /></a>
                                            <a href="#" target="_blank"><i className="fab fa-linkedin-in toggleIcon header" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bootom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="copyright-content">
                                        <p>2020 QloudFlix All rights reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
