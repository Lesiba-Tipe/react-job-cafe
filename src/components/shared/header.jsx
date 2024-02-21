import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () =>{

    const [showNavbar, setShowNavbar] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
      setIsExpanded(!isExpanded);
    }

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {

        const handleResize = () => {
          const width = window.innerWidth;
    
          // Set the image URL based on the device width
          if (width < 560) {    //35em  [MOBILE]
            
            setImageUrl('icon-bg-438x438.png');
            
        } else {          
            setImageUrl('Logo-Youth-Cafe-half-horizontal.png');
            
          }
        };
    
        // Initial call to set the image URL based on the initial window width
        handleResize();
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };

    }, []);


    return (
        <section className="header">
            <div className='img'>
                <Link to='/'>

                <img src={process.env.PUBLIC_URL + imageUrl} alt="Logo" />
                {/* {
                  console.log(`URL ${process.env.PUBLIC_URL + imageUrl}`)
                } */}
                {/* <img src={imageUrl} alt="Logo" /> */}
                {/* <img src={require('../../assets/Youth-Cafe-logo-halfAsset12@72x.png')} alt="Logo" /> */}
                {/* <img src={require('../../assets/yc-logo-icon-ficonAsset15@72x.png')} alt="Logo" /> */}
                {/* <img src={require('../../../public//public/' + imageUrl)} alt="Logo" /> */}
                {/* <img src={require(imageUrl)} alt="Logo" /> */}
                {/* <img src={require(`../../../public/ ${imageUrl}`)} alt="Logo" /> */}

                
                </Link>
            </div>

            <button  className='btn-toogle-mobile-nav' onClick={() => handleShowNavbar()} aria-expanded={isExpanded} ></button>

            <nav className={`navigation ${showNavbar && 'active'} `}>
                <ul className="nav-list">
                    <li><Link to={'/jobs'} >Latest-Jobs</Link></li>
                    <li><Link to={'/'} >Internships</Link></li>
                    <li><Link to={'/'} >Bursary</Link></li>
                    <li><Link to={'/'} >eVasity Helper</Link></li>
                    <li><Link to={'/'} >Follow us</Link></li>

                </ul>
            </nav>

        </section>
    )
}

export default Header;

