import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import ResponsiveImage from '../responsiveImage';


const Header = () =>{

    const [showNavbar, setShowNavbar] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
      setIsExpanded(!isExpanded);
    }

    return (
        <section className="header">
            <div className='img'>
                <Link to='/'>

                  <ResponsiveImage
                    mobileSrc="/icon-bg-438x438.png"
                    tabletSrc="/Logo-Youth-Cafe-half-horizontal.png"
                    desktopSrc="/Logo-Youth-Cafe-half-horizontal.png"
                    alt="Logo"
                  />
                </Link>
            </div>

            <button  className='btn-toogle-mobile-nav' onClick={() => handleShowNavbar()} aria-expanded={isExpanded} ></button>

            <nav className={`navigation ${showNavbar && 'active'} `}>
                <ul className="nav-list">
                    <li><Link to={'/jobs'} >Jobs</Link></li>
                    <li><Link to={'/internships'} >Internships</Link></li>
                    <li><Link to={'/bursary'} >Bursary</Link></li>
                    <li><Link to={'/e-vasity'} >eVasity Helper</Link></li>
                    <li><Link to={'/about-us'} >About us</Link></li>
                    <li><Link to={'/contact-us'} >Contact us</Link></li>

                </ul>
            </nav>

        </section>
    )
}

export default Header;

