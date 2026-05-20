import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_list">
                <FaInstagram className="footer_icon" size={30} />
                <FaFacebook className="footer_icon" size={30} />
                <FaLinkedin className="footer_icon" size={30} />
            </div>

            <p>Madelyn Torff 2021</p>
        </footer>
    )
}

export default Footer;