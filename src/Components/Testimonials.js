import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderItem = [
  {
    testominial:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    name: "Christopher Henry",
    position: "Jr.Frontend Developer",
  },
  {
    testominial:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    name: "James Anderson",
    position: "Jr.Frontend Developer",
  },
];

const Testimonials = () => {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="gutter-top">
        <div className="container">
          <div className="testimonials-heading">
            <button className="btn-style3">Testimonials</button>
            <h2>What People Says?</h2>
            <Slider {...settings}>
              {sliderItem.map((data, index) => {
                return (
                  <div className="testomonials-bg" key={index}>
                     <i className="fas fa-quote-left"></i>
                    <p>{data.testominial}</p>
                    <h2>{data.name}</h2>
                    <p>{data.position}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
