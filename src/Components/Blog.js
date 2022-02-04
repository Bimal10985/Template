import React from "react";
import { Link } from "react-router-dom";
const blogData = [
  {
    img: "../images/Screenshot.png",
    date: "4/12/2021",
    title: "Lorem Ipsum",
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    img: "../images/Screenshot.png",
    date: "4/12/2021",
    title: "Lorem Ipsum",
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    img: "../images/Screenshot.png",
    date: "4/12/2021",
    title: "Lorem Ipsum",
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
];

const Blog = () => {
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="blog-bg">
              <div>
                <button className="btn-style3">Blog</button>
              </div>
              <h2>Trendy News Feed</h2>
            </div>
            {blogData.map((data, index) => {
              return (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <img src={data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-date">{data.date}</p>
                      <h2 className="card-title">{data.title}</h2>
                      <p className="card-text">{data.para}</p>
                      <div className="d-flex justify-content-between align-items-center mt-4 card-flex">
                        <Link to="">Read More</Link>
                        <i className="fas fa-share-square"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="blog-btn">
                <button className="btn-style2">View All</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Blog;
