import React from 'react';

const Footer = () => {
  return (
  <>
    <div className="section-top ">
        <div className="container footer">
        <div className="row mt-5">
            <div className="col-md-2 mb-4">
                <figure>
                    <img src="../images/logoss.png" alt="" />
                </figure>
            </div>
            <div className="col-md-3 mb-4">
                <h4>Address</h4>
                <span>qwertyui opasdfgh jklzxcvbnm</span>
                </div>
                <div className="col-md-2 mb-4">
                <h4>Tel:</h4>
                <span>789456123</span>
                </div>
                <div className="col-md-3 mb-4">
                <h4>Email</h4>
                <span>zxcvbnn@gmail.com</span>
                </div>
                <div className="col-md-2 mb-4">
                <h4 className='footer-icon'>Social Media</h4>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                </div>
        </div>
        </div>
    </div>
  </>);
};

export default Footer;
