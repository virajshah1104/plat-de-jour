import React, { useState } from 'react';
import './contactus.css'
import Footer from './footer';
import styled from "styled-components";

const Button2 = styled.button`
width:10%;
height:10%;
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
border: 0;
border-radius: 8px;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 2.5;
outline: transparent;
margin-top:5%;
margin-bottom:5%;
padding: 0rem 0rem;
text-align: center;
text-decoration: none;
transition: box-shadow .2s ease-in-out;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
`;


const ContactUs = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
    }

    const StarRating = () => {
        const [rating, setRating] = useState(0);
        return (
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? "on" : "off"}
                  onClick={() => setRating(index)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        );
      };

    return (
        <div>
            <form >
                <div className='contactus'>
                <h1 className="gradient__text">Feedback Form</h1>
                    <div className="contact-section" >
                        <p className="gradient__text">We'd love to hear from you </p>
                    </div>
                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your expierence with our interface</h3>
                    <StarRating /></div></div>

                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your expierence with our food predicition </h3>
                    <StarRating /></div></div>

                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your expierence with our recipe predicition </h3>
                    <StarRating /></div></div>

                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your expierence with our restaurants predicition </h3>
                    <StarRating /></div></div>


                    <div className="contact-section">
                    <h2 className="gradient__text">Your Name </h2>
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            required
                        />
                    </div>

                    

                    <div className="contact-section">
                    <h2 className="gradient__text">Your Email </h2>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                        />
                    </div>

                    
                    <div className="contact-section">
                    <h2 className="gradient__text">Your Message </h2>
                        <textarea 
                            rows="6"
                            placeholder="Your message"
                            name="message"
                            className="message-box"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            required
                        />
                    </div>

                    <div className="contact-section">
                        <Button2
                            className=""
                            type="submit"
                            onClick={handleSubmit}
                        >
Send a message                            
                        </Button2>
                    </div>

                </div>
                <Footer />
            </form>
        </div>
    )
};

export default ContactUs;






