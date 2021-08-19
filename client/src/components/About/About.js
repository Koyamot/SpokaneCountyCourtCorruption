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
      <h2>Send us a message</h2>
      <form className="flex-column align-center" onSubmit={sendEmail}>
        <p>
          It has been a long and tiresome road. Do you have a similar case? We want to hear from you.
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
