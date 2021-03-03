import React from 'react'
import Logo from '../assets/image/Logo3.png'
import MessageImage from '../assets/image/message.png'
import CartImage from '../assets/image/cart.png'
import Notification from '../assets/image/notification.png'
import Search from '../assets/image/search.png'
import Profile from '../assets/image/profile.png'
export default function Navbar() {
    return (
        <>
            <section className="main-bg">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-brand logo">
                            <img alt="" src={Logo} />
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fas fa-bars toggleIcon" /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link">  Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Orders </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Community</a>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link"> <img src={MessageImage} /></a> */}
                                    <i className="far fa-envelope toggleIcon header" />
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link"> <img src={CartImage} /></a>
                                     */}
                                    <i className="fa fa-shopping-cart toggleIcon header" />

                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link"> <img src={Notification} /></a> */}
                                    <i className="far fa-bell toggleIcon header" />
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link"> <img src={Search} /></a> */}
                                    <i className="fa fa-search toggleIcon header" />
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-profile"> <img src={Profile} /></a> */}
                                    <i className="far fa-user toggleIcon header" />
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}
