"use client";
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';


const Home = () => {
    const [signIn, setSignIn] = useState(true);
    // const [joinIn, setJoinIn] = useState(false);
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-lg-between justify-content-center  flex-lg-row flex-column">

                    <div className="py-5 col-lg-6 col-12">
                        
                            <h4>Explore your <span className="text-primary">hobby</span> or <span style={{ color: "#8064A2", }}>passion</span></h4>
                            <div style={{ fontSize: "12px" }}>
                                <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                                <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
                            </div>
                            <Image
                                src="/images/home.png"
                                width={350}
                                height={120}
                                alt="Picture of the author"
                            />

                       
                    </div>


                    <div className="py-5 col-lg-4 col-12">
                        <div>
                            <div className='d-flex gap-4 mb-4'>
                                <button href="#" className="signIn border-0 bg-transparent active" style={{ color: "#8064A2", }} onClick={() => setSignIn(true)}>Sign In</button>
                                <button href="#" className="joinIn border-0 bg-transparent" style={{ color: "#8064A2", }} onClick={() => setSignIn(false)}>Join In</button>
                            </div>

                            {signIn ?

                                <form>
                                    <div className="row">
                                        <button type="button" className="btn btn-outline-secondary w-100 fw-bold">continue With Google</button>
                                        <button type="button" className="btn btn-outline-secondary w-100 fw-bold mt-2">continue With Facebook</button>
                                        <div className="">
                                            <div className="form-group mt-5">

                                                <input type="email" className="form-control" id="email" placeholder='email' />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="form-group mt-2">

                                                <input type="password" className="form-control" id="password" placeholder='password' />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between mt-3" style={{fontSize: "14px"}}>
                                            <div>
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                            </div>
                                            <div>
                                                Forgot Password?
                                            </div>

                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-outline-secondary fw-bold w-100 mt-4 text-light" style={{ backgroundColor: "#8064A2", }}>Agree and Continue</button>

                                </form>

                                :
                                <form>
                                    <div className="row">
                                        <button type="button" className="btn btn-outline-secondary w-100 fw-bold">continue With Google</button>
                                        <button type="button" className="btn btn-outline-secondary w-100 fw-bold mt-2">continue With Facebook</button>
                                        <div className="">
                                            <div className="form-group mt-5">

                                                <input type="email" className="form-control" id="email" placeholder='email' />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="form-group mt-2">

                                                <input type="password" className="form-control" id="password" placeholder='password' />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="mt-4" style={{fontSize: "12px"}}>
                                        By continuing, you agree to our Terms of Service and Privacy Policy.
                                        </div>
                                    <button type="submit" className="btn btn-outline-secondary fw-bold w-100 mt-1 text-light" style={{ backgroundColor: "#8064A2", }}>Agree and Continue</button>

                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
