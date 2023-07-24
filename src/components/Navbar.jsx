import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faTwitter } from "@fortawesome/free-brands-svg-icons"
import '../styles/Navbar.css'
import { ReactComponent as Logo } from "../assets/logo-bookmark.svg";
import { useState } from "react"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }
    return (
        <nav>
            <div className={`nav-items-bg ${isOpen ? "opened" : ""}`} onClick={toggleIsOpen}></div>
            <Logo className={`logo ${isOpen ? "opened" : ""}`} />
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <div className="nav-item-divider"></div>
                <a>Features</a>
                <div className="nav-item-divider"></div>
                <a>Pricing</a>
                <div className="nav-item-divider"></div>
                <a>Contact</a>
                <div className="nav-item-divider"></div>
                <button className="login-btn">Login</button>
                
            </div>
            <div className={`nav-socials ${isOpen ? "opened" : ""}`}>
                    <FontAwesomeIcon icon={faFacebookSquare} size="xl" className="nav-social-icon" />
                    <FontAwesomeIcon icon={faTwitter} size="xl" className="nav-social-icon" />
            </div>
            <img className={`menu-btn ${isOpen ? "opened" : ""}`} src={`/images/icon-${isOpen ? "close" : "hamburger"}.svg`} onClick={toggleIsOpen} />
        </nav>
    )
}