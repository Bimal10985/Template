import React from 'react';
import Description from './Description';



const AboutUs = () => {
  return(
    <>
        <div className="container mt-5">
            <div className="section-top">
                <div className="row">
                    <div className="col-md-6">
                        <figure>
                            <img src="../images/Screenshot.png" alt="" className='abtus-img'/>
                        </figure>
                    </div>
                    <div className="col-md-6">
                    <Description btn1="About Me" heading="Why hire me for next Projects?" btn2="Download Cv"/>

                        </div>
                </div>
            </div>
        </div>
    </>
  ) ;
};

export default AboutUs;
