import { BsDownload } from "react-icons/bs";
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Resume = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID!, import.meta.env.VITE_EMAILJS_TEMPLATE_ID!, formData, import.meta.env.VITE_EMAILJS_USER_ID)
            .then(() => {
                setStatus("Message sent successfully!");
            }, () => {
                setStatus("Failed to send the message.");
            });

        // Send auto-reply to the sender
        const autoReplyData = {
            to_email: formData.email, // Send to sender's email
            name: formData.name, // Sender's name
        };

        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID!, import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID!, autoReplyData, import.meta.env.VITE_EMAILJS_USER_ID)
            .then(() => {
                console.log("Auto-reply sent.");
            }, (error: any) => {
                console.log("Failed to send auto-reply:", error.text);
            });

        // Clear form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-page">
            <h1>Contact <b>Me</b></h1>

            <div className="contact-container">
                {/* Contact Info Section */}
                <div className="contact-info">
                    <h2>Reach Out</h2>
                    <p>
                        <FaEnvelope className="icon" /> forestbriggs14@gmail.com
                    </p>
                    <p>
                        <FaPhone className="icon" /> +1 (541) 543-5702
                    </p>
                    <p>
                        <FaMapMarkerAlt className="icon" /> Oregon, USA
                    </p>
                </div>


                {/* Contact Form Section */}
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Enter your message (Feel free to ask me anything)"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    {/* TODO: make button show loading state */}
                    <button type="submit">Submit</button>
                    {status && <p className="status-message">{status}</p>}
                </form>
            </div>
            <a className="downloadCV" href="/ForestBriggsResume.pdf" target='_blank' rel='noreferrer noopener' download="Forest_Briggs_Resume.pdf">
                <h3><BsDownload />&nbsp; Download CV</h3>
            </a>
        </div>

    )
}

export default Resume