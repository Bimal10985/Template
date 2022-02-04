import React from "react";
import {object,string} from "yup";
import { Formik } from "formik";
import TextField from "./TextField";
const ContactForm = () => {
  const contactFormSchema = object({
    name: string().required(),
    email: string().required(),
    phone: string().required(),
    address: string().required(),
    message: string().required(),
  });
  return (
    <>
      <div className="gutter-top">
        <div className="container">
          <div className="contact-heading">
            <div>
              <button className="btn-style3">Contact Us</button>
            </div>
            <h2>Send Me A Message</h2>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              address: "",
              message: "",
            }}
            onSubmit={(data) => {
              console.log(data);
            }}
            validationSchema={contactFormSchema}
          >
            {({ errors, handleChange, handleSubmit, values }) => {
              console.log(values)
              return(
<form onSubmit={handleSubmit}>
                 <div className="row mt-4">
                  <div className="col">
                   <TextField name="name" placeholder="Enter Name"/>
                  </div>
                  <div className="col">
                  <TextField name="email" placeholder="Enter email"/>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                   <TextField name="phone" placeholder="Enter Phone"/>
                  </div>
                  <div className="col">
                  <TextField name="address" placeholder="Enter Address"/>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <textarea placeholder="Enter Message" name="Message" onChange={handleChange} className="form-control" row="5"/>
                    {errors.message}
                  </div>
                </div>
                <div className="blog-btn">
                  <button className="btn-style2" type="submit">
                    Submit Now
                  </button>
                </div>
              </form>
              )
              ;
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
