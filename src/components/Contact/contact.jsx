import React, { useContext, useRef, useState } from "react"
import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/gmail.png"
import address from "../../img/location-pin.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef= useRef()
  const [done,setDone]=useState(false);

  const theme = useContext(ThemeContext);
  const darkmode=theme.state.darkmode;

  const handleSubmit = (event)=>{
      event.preventDefault();
      emailjs.sendForm('service_hnpu21n', 'template_jqjf4wf', formRef.current, 'c07KeJ2Otk4hX1r3Y')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="c">
      <div style={{backgroundColor:darkmode && "purple"}} className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's Connect and Explore</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={phone} alt="" className="c-icon" />
                    +91 9903216369
                </div>
                <div className="c-info-item">
                    <img src={email} alt="" className="c-icon" />
                    dheerajmajhi07@gmail.com
                </div>
                <div className="c-info-item">
                    <img src={address} alt="" className="c-icon" />
                    Hall 2,Nit durgapur
                </div>
            </div>
        </div>
        <div className="c-right">
                <p className="c-desc">
                    <b>So What's your opinion?</b>Let's join hands and connect to learn and grow together. Feel welcome to share any suggestions as we embark on this journey of collective knowledge and progress.
                </p>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <input style={{backgroundColor:darkmode && "#222",borderBottom:darkmode && "1px solid white"}} type="text" placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor:darkmode && "#222",borderBottom:darkmode && "1px solid white"}} type="text" placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor:darkmode && "#222",borderBottom:darkmode && "1px solid white"}} type="email" placeholder='Email' name='user_email'/>
                    <textarea style={{backgroundColor:darkmode && "#222",border:darkmode && "1px solid white"}} name="user_message" placeholder='Message' rows="5"></textarea>
                    <button style={{backgroundColor:darkmode && "purple"}}>Submit</button>
                    {done && <span style={{color:darkmode && "purple"}} className="c-message">Thank You for your Response...</span>}
                </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
