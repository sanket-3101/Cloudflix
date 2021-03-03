import React from 'react'
import Illustration from '../../assets/image/Illustration.png'
import MovieImage from '../../assets/image/movie.png'
import Producer from '../../assets/image/producer.png'
import Director from '../../assets/image/director.png'
import Actor from '../../assets/image/actor.png'
import SideImg from '../../assets/image/side-img.png'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
export default function Home() {
    return (
        <>
            <Navbar />
            <section className="second-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xl-6 col-12">
                            <div className="description">
                                <h1>Empowering<br />Creative Freedom</h1>
                                <p>Welcome to Qloudflix<br />Where Investors meet Creators<br />and Art meets Technology in the movie word</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xl-6 col-12">
                            <div className="image-area">
                                <img alt="" src={Illustration} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="approch-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-12">
                            <div className="approch-area-content">
                                <h4>Which one are you?</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row temp-eight">
                        <div className="col-md-3 col-xl-3 col-lg-3 col-12 ">
                            <div className="approch-images">
                                <img alt="" src={MovieImage} />
                            </div>
                            <p>Movie Fan</p>
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-12 ">
                            <div className="approch-images">
                                <img alt="" src={Producer} />
                            </div>
                            <p>producer</p>
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-12 ">
                            <div className="approch-images">
                                <img alt="" src={Director} />
                            </div>
                            <p>Director</p>
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-12">
                            <div className="approch-images">
                                <img alt="" src={Actor} />
                            </div>
                            <p>Actors/Technician/<br />Other Movies Professionals</p>
                        </div>
                    </div>
                    <div className="approch-area-content">
                        <h4>Already a member?</h4>
                    </div>
                    <div className="sign-in-btn text-center">
                        <h5>Sign in</h5>
                    </div>
                </div>
            </section>
            <section className="third-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xl-6 col-12">
                            <div className="image-second">
                                <img alt="" src={SideImg} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xl-6 col-12">
                            <div className="desc-second">
                                <h1>Experience<br />the power of AI</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum odio odio, sit amet mollis nibh congue sit amet. In facilisis erat urna, et tristique libero pretium sed. Proin scelerisque turpis convallis sollicitudin finibus.In facilisis erat urna, et tristique libero pretium sed. Proin scelerisque turpis convallis sollicitudin finibus</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum odio odio, sit amet mollis nibh congue sit amet. In facilisis erat urna, et tristique libero pretium sed. Proin scelerisque turpis convallis sollicitudin finibus.In facilisis erat urna, et tristique libero pretium sed. Proin scelerisque turpis convallis sollicitudin finibus</p>
                                <a href><button className="Know-btn">Know More</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
