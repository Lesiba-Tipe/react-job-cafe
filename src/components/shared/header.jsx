import './header.css'
import { useState } from 'react'

const Header = () =>{

    const [showNavbar, setShowNavbar] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
      setIsExpanded(!isExpanded);
    }


    return (

        <section className="header">
            
            <img src={require('../../assets/jobCafe-logo.png')} alt="Logo" />

            <button  className='btn-toogle-mobile-nav' onClick={() => handleShowNavbar()} aria-expanded={isExpanded} ></button>

            <nav className={`navigation shadow-lg ${showNavbar && 'active'} `}>
                <ul className="nav-list">
                    <li><a href="#internship">Internships</a></li>
                    <li><a href="#learnership">Learnerships</a></li>
                    <li><a href="#bursary">Bursary</a></li>
                    <li><a href="#evasity">eVasity Helper</a></li>
                    <li><a href="#socials">Follow us</a></li>
                </ul>
            </nav>

           

        </section>
    )
}

export default Header;

