import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faSquareInstagram,
  faWhatsapp,
  faGoogle,
  faYoutube,
  faTelegram,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';




const Abovefooter = () => {
  const hobby = [
    {
      name: "About Us"
    },
    {
      name: "Our Services"
    },
    {
      name: "Work with us"
    },
    {
      name: "FAQ"
    },
    {
      name: "Contact Us"
    },
  ];
  const how = [
    {
      name: "Sign Up"
    },
    {
      name: "Add a Listing"
    },
    {
      name: "Claim Listing"
    },
    {
      name: "Post a Query"
    },
    {
      name: "Add a Blog Post"
    },
    {
      name: "Other Queries"
    },
  ];
  const links = [
    {
      name: "Listings"
    },
    {
      name: "Blog Posts"
    },
    {
      name: "Shop / Store"
    },
    {
      name: "Community"
    },
  ];

  const socialMedia = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />
    },
  ]

  return (
    <div className="container mt-5">
      <div className="d-flex flex-md-row flex-column justify-content-center justify-content-md-between">
        <div className="col-lg-6 col-12 d-flex justify-content-md-between justify-content-center flex-column flex-md-row" style={{fontSize: "14px"}}>
          <ul className="list-unstyled">
            <li className="fw-bold">HobbyCue</li>
            {
              hobby.map(({ name }, id) => {

                return (
                  <div key={id}>
                    <li>{name}</li>
                  </div>
                )
              })
            }
          </ul>
          <ul className="list-unstyled">
            <li className="fw-bold">How Do I</li>
            {
              how.map(({ name }, id) => {

                return (
                  <div key={id}>
                    <li>{name}</li>
                  </div>
                )
              })
            }
          </ul>
          <ul className="list-unstyled">
            <li className="fw-bold">HobbyCue</li>
            {
              links.map(({ name }, id) => {

                return (
                  <div key={id}>
                    <li>{name}</li>
                  </div>
                )
              })
            }
          </ul>
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <ul className="list-unstyled">
            <li className="fw-bold">Social Media</li>
            <div className="d-flex gap-4">
              {
                socialMedia.map(({ icon }, id) => {

                  return (
                    <div key={id} >
                      <li>{icon}</li>
                    </div>
                  )
                })
              }
            </div>
            <div className="mt-4">
               <p className="fw-bold">Invite friends</p>
              <div class="mt-2 d-flex">
                <div class="form-outline" data-mdb-input-init>
                  <input id="search-input" type="search" class="form-control" />

                </div>
                <button id="search-button" type="button" class="btn text-light" style={{ backgroundColor: "#8064A2" }}>
                Invite
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Abovefooter;
