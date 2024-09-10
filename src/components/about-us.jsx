import './about-us.css'
import React from 'react';

const AboutUs = () => {

    return (

        <section className='about flex flex-col'>


            <div className="flex about-us">
                
                <img className='logo' src={require('../assets/media/presentation_1.jpg')} alt="Logo" />
                <div className=''>
                    <h3>About Us</h3>
                    <p>                      
                       <span> Welcome to Youth Cafe, </span> your premier destination for all things related to career exploration, talent acquisition, and professional growth. Founded on the belief that finding the right job or candidate should be seamless and rewarding, we have dedicated ourselves to creating a platform that simplifies the complexities of the job market.
                        <br></br>  <br></br>
                        At Youth Cafe, we understand that every individual's career journey is unique. Whether you're a seasoned professional looking for your next challenge, a recent graduate eager to kickstart your career, or an employer seeking top talent to drive your business forward, we're here to support you every step of the way.
                    </p>
                </div>
            </div>  

            <div className="mission flex">
                <div>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission isto connect talent with opportunity, empowering individuals and businesses to thrive.
                        <br></br>  <br></br>
                        We are driven by the belief that everyone deserves access to fulfilling work and the chance to achieve their career aspirations. Our mission is to make that belief a reality by providing a platform that facilitates seamless connections between job seekers and employers.
                    </p>
                </div>
                <img src={require('../assets/media/Logo-Youth-Cafe-full.png')} alt="Logo" />
            </div>

            <div className="values flex">
                <img src={require('../assets/media/Logo-Youth-Cafe-full.png')} alt="Logo" />
                
                <div>
                    <h3>Our Values</h3>
                    <p>
                        Our mission isto connect talent with opportunity, empowering individuals and businesses to thrive.
                        <br></br>  <br></br>
                        We are driven by the belief that everyone deserves access to fulfilling work and the chance to achieve their career aspirations. Our mission is to make that belief a reality by providing a platform that facilitates seamless connections between job seekers and employers.
                    </p>
                </div>
            </div>

           
        </section>
    )
}

export default AboutUs;