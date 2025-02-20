import './ContactForm.css';
import { useRef} from 'react';
import emailjs from "@emailjs/browser";
import { useModal } from '../../context/Modal';


const ContactForm = () => {
    const form = useRef();
    const {closeModal} = useModal();
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
                    closeModal();

                },
                (error) => {
                    console.log("Error sending email", error.text);
                }
            )
    }
    return (

        <div className='contact-form-wrapper'>

            <div className='form-header'>
                <h1>Thank Your for your interest</h1>
                <p>Please provide your name and email below along with your inquiry</p>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className='form-section'>
                    <label>Name</label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder='first name, last name (or last initial)...'
                        required
                    />
                </div>
                <div className='form-section'>

                    <label>Email</label>
                    <input
                        type="text"
                        name="user_email"
                        placeholder='valid email address...'
                        required
                    />
                </div>
                <div className='form-message'>
                    <textarea name="user_message" placeholder='please provide a detailed message...' required></textarea>
                </div>
                <div className='form-footer'>

                    <p>*Emails will usually recieve a response same day</p>
                    <p>If no reponse is received please wait 2-3 days before sending another email.</p>
                    <p>All emails are directed to <span>wbc.integrations@gmail.com</span></p>

                </div>

                <button type="submit">Send Email</button>
                <p id="cancel-tag" onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                }
                }>cancel</p>
            </form>
        </div>

    )
}

export default ContactForm;
