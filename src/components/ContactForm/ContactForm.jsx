import './ContactForm.css';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { IoMdClose } from "react-icons/io";


const ContactForm = () => {
    const [closeForm, setCloseForm] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_jsw1o5d",
            "template_f1sirmt",
            form.current,
            "tNI7pRf2YM9lZwva8"
        )
            .then(
                (result) => {
                    console.log("Email send successfully", result.text);
                    alert("Message sent!");
                    setCloseForm(true);
                },
                (error) => {
                    console.log("Error sending email", error.text);
                }
            )
    }
    return (
        !closeForm &&
        <div className='contact-form-wrapper'>
            <div className='close-form-container' onClick={(e) => {
                e.preventDefault();
                setCloseForm(true);
            }}>

                <div id="close-form">
                    <IoMdClose />
                </div>
                <p>close</p>
            </div>


            <div className='form-header'>
                <h1>Thank Your for your interest</h1>
                <p>Please provide your name and email below along with your inquiry</p>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className='form-section'>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder='Your Name'
                        required
                    />
                </div>
                <div className='form-section'>

                    <label>Email</label>
                    <input
                        type="text"
                        name="user_email"
                        placeholder='Your Email'
                        required
                    />
                </div>
                <div className='form-message'>
                    <textarea name="user_message" placeholder='Your Message' required></textarea>
                </div>
                <div className='form-footer'>
                    <p>*Emails will usually recieve a response same day</p>
                    <p>If no reponse is received please wait 2-3 days before sending another email.</p>
                    <p>All emails are directed to <span>wbc.integrations@gmail.com</span></p>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
        
    )
}

export default ContactForm;
