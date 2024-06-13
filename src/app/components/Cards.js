import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleStop,
    faBookmark,
    faUsersLine,
    faLocationDot,
    faCalendarCheck,
    faBell,
    faCartShopping,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const Cards = () => {

    const data = [
        {
            name: "People",
            content: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
            icon: <FontAwesomeIcon icon={faUsersLine} />,
            btnName: "Connect",
            color: "purple"
        },
        {
            name: "Place",
            content: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
            icon: <FontAwesomeIcon icon={faLocationDot} />,
            btnName: "Meet Up",
            color: "green"
        },
        {
            name: "Product",
            content: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
            icon: <FontAwesomeIcon icon={faShoppingCart} />,
            btnName: "Get it",
            color: "red"
        },
        {
            name: "Program",
            content: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
            icon: <FontAwesomeIcon icon={faCalendarCheck} />,
            btnName: "Attend",
            color: "blue"
        },
    ]
    return (
        <div className="container d-flex justify-content-center flex-wrap gap-5 mt-4">


            {
                data.map(({ name, content, icon, btnName, color }, id) => {
                    return (
                        <div key={id} class="card" className="p-4" style={{ width: "32rem", border: `2px solid ${color}`}}>
                            <div class="card-body">
                                <div className="d-flex gap-2">
                                    <span style={{ color: `${color}`, fontSize: "20px" }}>{icon}</span>
                                    <h5 class="card-title">{name}</h5>
                                </div>
                                <p style={{fontSize: "12px" }} class="card-text">{content}</p>
                                <div>
                                    <button type="button" class="btn btn-outline-sucess" style={{
                                        color: "#8064A2",
                                        borderColor: "#8064A2",
                                        borderWidth: "1px",
                                        borderStyle: "solid"
                                    }}>{btnName}</button>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;
