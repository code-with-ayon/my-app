import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hh7w21j', 'template_4lclp32', form.current, 'xGl1MSStnGS1-arUQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="to_name" ></input>
            <label>Email</label>
            <input type="email" name="from_name" ></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message"></textarea>
            <button className="btn" type="Submit" value="send">Submit</button>
        </form>
    </div>
  )
}

export default Form