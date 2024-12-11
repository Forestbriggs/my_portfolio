'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <footer>
            <p>Developed by Forest Briggs</p>
            <p>Copyright &copy; 2024 FB</p>
            <div className='footerLinks'>
                <a aria-label="Github" href="https://github.com/Forestbriggs" target='_blank' rel='noreferrer noopener'><FaGithub /></a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/forest-briggs/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                <a aria-label="Email" href='mailTo:forestbriggs14@gmail.com' target='_blank' rel='noreferrer noopener'><GrMail /></a>
            </div>
        </footer>
    )
}

export default Footer