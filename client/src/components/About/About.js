import React from "react";
import emailjs from "emailjs-com";

import "./About.scss";

const About = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "courtcorruption",
            "sccc_message",
            e.target,
            "user_Ek4nxz1L2eoEPtNlzihZ0"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
    
        e.target.reset();
      };
      
  return (
    <div className="about-div">
      <h2>Submit Your Request</h2>
      <form className="flex-column align-center" onSubmit={sendEmail}>
        <p>
          We are excited to have you stay with us! Please fill out the form
          below, and we'll get back to you as soon as possible. If you have any
          accomodations, pets, questions, please add them to the message
          section.
        </p>
        <div className="name-box">
          <label>
            Name:
            <input
              className="margin-right"
              type="text"
              placeholder="Enter your name"
              name="firstName"
            />
          </label>
          <label>
            Email:
            <input type="text" placeholder="email@email.com" name="email" />
          </label>
        </div>
        <label>
          {" "}
          Send us a message:
          <br />
          <textarea type="text" name="message"></textarea>
        </label>
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default About;
