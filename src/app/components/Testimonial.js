import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const Testimonial = () => {
  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
    <div className="p-4" style={{width: "83%", backgroundColor: "#F7F5F9"}}>
        <div class="card-body">
            <div className="d-flex gap-2">
                <span style={{ color: "#8064A2", fontSize: "20px" }}><FontAwesomeIcon icon={faQuoteLeft} /></span>
                <h5 class="card-title">Testimonials</h5>
            </div>
            <p style={{ fontSize: "12px" }} class="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
            <div>
                <span style={{
                    color: "#8064A2",
                }}>subha Nagarangan</span>
            </div>

        </div>
    </div>
</div>
  )
}

export default Testimonial;
