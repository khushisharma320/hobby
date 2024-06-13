"use client";
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { CiSearch } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faXmark,
    faBookmark,
    faBell,
    faBars,
    faCartShopping
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container d-flex justify-content-around">
                    <div className="d-flex gap-4 fw-bold">
                        <div  style={{
                            color: "blue",
                            borderColor: "#8064A2",
                            borderWidth: "4px",
                            borderStyle: "solid",
                            width: "70px",
                            height: "46px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "18px"
                        }}>
                        h
                        </div>
                        <div>
                            <a class="navbar-brand text-primary" href="#">Hobby<span style={{ color: "#8064A2" }}>Cue</span></a>
                            <p style={{ fontSize: "8px"}}>Your Hobby, Your Community</p>
                        </div>
                    </div>

                    <div className="d-lg-none d-block z-3" onClick={()=>setNav(!nav)}>
                  { nav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} /> }
                    </div>

                    {
                        nav &&
                        <div className="d-flex bg-light flex-column gap-5 justify-content-center align-items-center position-absolute top-0 end-4 w-100 z-2" style={{height: "100vh"}}>
                        <div class="ml-5 d-flex">
                            <div class="form-outline" data-mdb-input-init>
                                <input id="search-input" type="search" class="form-control" />
    
                            </div>
                            <button id="search-button" type="button" class="btn text-light" style={{ backgroundColor: "#8064A2" }}>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                />
                            </button>
                        </div>
    
                        <div className="d-flex gap-4" style={{fontSize: "15px"}}>
                            <div>
                                <li class="nav-item dropdown list-unstyled">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Explore
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </div>
                            <div>
                                <li class="nav-item dropdown list-unstyled">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Hobbies
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </div>
                        </div>
    
    
                        <div className="d-flex gap-4 justify-content-center align-items-center" style={{ color: "#8064A2" }}>
                            <p><FontAwesomeIcon icon={faBookmark} /></p>
                            <p><FontAwesomeIcon icon={faBell} /></p>
                            <p><FontAwesomeIcon icon={faCartShopping} /></p>
                        </div>
    
    
                        <div>
                            <button type="button" class="btn btn-outline-sucess" style={{
                                color: "#8064A2",
                                borderColor: "#8064A2",
                                borderWidth: "1px",
                                borderStyle: "solid"
                            }}>Sign In</button>
                        </div>
    
                        </div> 
                      
                    }

<div className="d-none d-md-flex gap-5">
                         <div class="ml-5 d-flex">
                             <div class="form-outline" data-mdb-input-init>
                                 <input id="search-input" type="search" class="form-control" />
     
                             </div>
                             <button id="search-button" type="button" class="btn text-light" style={{ backgroundColor: "#8064A2" }}>
                                 <FontAwesomeIcon
                                     icon={faMagnifyingGlass}
                                 />
                             </button>
                         </div>
     
                         <div className="d-flex gap-4" style={{fontSize: "15px"}}>
                             <div>
                                 <li class="nav-item dropdown list-unstyled">
                                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                         Explore
                                     </a>
                                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                         <li><a class="dropdown-item" href="#">Action</a></li>
                                         <li><a class="dropdown-item" href="#">Another action</a></li>
                                         <li><hr class="dropdown-divider" /></li>
                                         <li><a class="dropdown-item" href="#">Something else here</a></li>
                                     </ul>
                                 </li>
                             </div>
                             <div>
                                 <li class="nav-item dropdown list-unstyled">
                                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                         Hobbies
                                     </a>
                                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                         <li><a class="dropdown-item" href="#">Action</a></li>
                                         <li><a class="dropdown-item" href="#">Another action</a></li>
                                         <li><hr class="dropdown-divider" /></li>
                                         <li><a class="dropdown-item" href="#">Something else here</a></li>
                                     </ul>
                                 </li>
                             </div>
                         </div>
     
     
                         <div className="d-flex gap-4 justify-content-center align-items-center" style={{ color: "#8064A2" }}>
                             <p><FontAwesomeIcon icon={faBookmark} /></p>
                             <p><FontAwesomeIcon icon={faBell} /></p>
                             <p><FontAwesomeIcon icon={faCartShopping} /></p>
                         </div>
     
     
                         <div>
                             <button type="button" class="btn btn-outline-sucess" style={{
                                 color: "#8064A2",
                                 borderColor: "#8064A2",
                                 borderWidth: "1px",
                                 borderStyle: "solid"
                             }}>Sign In</button>
                         </div>
     
                         </div>

                    
                </div>
            </nav>
        </div>

    )

}

export default Navbar;
