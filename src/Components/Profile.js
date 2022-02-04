import React from "react";
import { Link, NavLink } from "react-router-dom";
import Description from "./Description";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 profile-desc">
          <figure>
            <img src="../images/logoss.png" alt="" />
          </figure>
            <Description
              btn1="Welcome I'm"
              heading="Matt Henry"
              btn2="Learn More"
            />
            <div className="profile-icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          <div className="col-md-6">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active-link" to="">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active-link" to="">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active-link" to="">
                      Bio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active-link" to="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <figure className="profile-img">
              <img src="../images/Screenshot.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
