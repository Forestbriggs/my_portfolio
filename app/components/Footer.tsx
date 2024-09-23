'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
    return (
        <footer>
            <h4>Developed by Forest Briggs</h4>
            <h4>Copyright &copy; 2024 FB</h4>
            <div className='footerLinks'>
                <a href="https://github.com/Forestbriggs" target='_blank' rel='noreferrer noopener'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/forest-briggs/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                <a href='mailTo:forestbriggs14@gmail.com' target='_blank' rel='noreferrer noopener'><GrMail /></a>
                <a href="https://leetcode.com/Forestbriggs/" target="_blank" rel='noreferrer noopener'><SiLeetcode /></a>
            </div>
        </footer>
    )
}

export default Footer