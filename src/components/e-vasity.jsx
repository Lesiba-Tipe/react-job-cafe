import React, { useState, useEffect } from 'react';
import Emoji from "react-emoji-render";
import './e-vasity.css';
import { Link } from 'react-router-dom';

const EVasity = ({vasities}) => {

  const [univesities, setUnivesities] = useState([]);

  useEffect(() => {
      
    
    const data = vasities
    setUnivesities(data);

  },[]);

  console.log('VASITY:',univesities)

  return (
    <section className='frame-varsity'>
        {            
                vasities.length === 0 ?
                (
                    <div>There's currently no bursaries on our database, please check us later!!!<Emoji text=":)" /> </div>
                ):
                (

                  
                  <div className='varsity-container'>
                    {
                      vasities.map((vasity) => (
                       <a href={`${vasity.website}`} target="_blank" rel="noopener noreferrer">
                          <div key={vasity.name} className='varsity-card shadow card-grow'>

                              <div className='job-card-header'>
                                <h5>{vasity.name}</h5>
                              </div>

                              <div className='job-card-body'>


                                <div className="img-logo">
                                    <img src={require('../assets/media/Logo-Youth-Cafe-full.png')} alt='Logo'/>
                                </div>



                                <div className='job-info'>
                                    <p className='bi bi-envelope' > {vasity.email}</p>
                                    <p className='bi bi-telephone' > {vasity.telephone}</p>
                                    <p className='bi bi-globe' > {vasity.website}</p>
                                    <p className='bi bi-mortarboard-fill' > {vasity.registrar}</p>
                                </div>


                              </div>

                              <div className='job-card-footer'>
                              <div>                               
                                <p className='bi bi-geo-alt'> {vasity.province}</p>
                              </div>                    
                            </div>

                          </div>
                       </a>
                      ))
                    }
                  </div>
                )

            }  
        
        <p className='notice' >This Infomation was extracted from Dept of Basic Education website. <a href='https://www.education.gov.za/FurtherStudies/Universities.aspx' target="_blank" rel="noopener noreferrer" className='italic text-green-800' >click here </a> </p>
    </section>
  );
}

export default EVasity;