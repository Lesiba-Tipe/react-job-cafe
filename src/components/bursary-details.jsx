import './job-details.css'
import React from 'react';
import { Link, useParams } from 'react-router-dom';
//import bursaries from './bursaries';
import Advert from './advert'
import YouthCafeDatabase from './fetchData';
import { Link as LinkScroll } from 'react-scroll';


const BursaryDetails = ({bursaries}) =>{

    const data = YouthCafeDatabase()
    let { tittle } = useParams();
    tittle = decodeURIComponent(tittle.replace(/-/g, ' '));
    console.log('Tittle:' + tittle)
    const bursary = bursaries.find((j) => j.tittle === tittle);

    if (!bursary) {
        return <div>No bursaries found</div>;
    }

    return(

        <div className='frame-job-details'>
            <div className='job-details-container' >
                <h2> <span>{bursary.sponsor}</span>: {bursary.tittle}</h2>

                <section className='job-header'>

                    <div className='job-header-details'>
                        {/* <img src={bursary.logo} /> */}
                        <div className='job-header-img-container'>
                            <img src={require('../assets/media/Logo-Youth-Cafe-full.png')} alt={bursary.employer} />
                        </div>
                        <div className='job-info'>
                            <p>
                                <span>Sponsor</span>: {bursary.sponsor} <br/>
                                <span>Tittle</span>: {bursary.tittle} <br/>
                                <span>Location</span>: {bursary.location} <br/>
                                <span>Closing Date</span>: {bursary.closing} <br/>
                                <span>Date Posted</span>: {bursary.posted}
                            </p>

                        </div>
                    </div>

                    <div className='job-header-about'>
                        <h5>About {bursary.sponsor}</h5>
                        <p>{bursary.introduction}</p>
                    </div>

                </section>

                <section className='job-description'>

                    <h4>bursary description</h4>
                    <p>{bursary.description}</p>
                   
                </section>

                <section className="min-req-exp">
                    <h4>Minimum Experience</h4>
                    <ul>
                        { bursary.exp ?(
                            bursary.exp.map((experience) =>(
                                <li key={experience}>{experience}</li>
                            ))
                        ): null
                        }
                    </ul>
                </section>

                <Advert></Advert>

                <section className='job-qualification-skill'>
                    <div className='job-qualification'>
                        <h4>Qualifications | Min Requirements</h4>
                        <ul>
                            {
                                bursary.qualifications.map((qualification) => (
                                    <li key={qualification} >{qualification}</li>
                                ))
                            }
                        </ul> 
                        
                    </div> 

                    
                </section>

                <Advert></Advert>

                <section className='job-apply'>
                    <h4>How to apply</h4>
                    {                       
                        bursary.apply.map((applyMethod) =>(

                            applyMethod.state? (
                                applyMethod.type === 'online'?
                                    <Link key={applyMethod.name} to={applyMethod.name}>
                                        {/* <p className='link' key={applyMethod.name}> {applyMethod.name}</p> */}

                                        <button className='btn'>Apply</button>
                                    </Link>
                                :<p key={applyMethod.name} > {applyMethod.name}</p> 
                            ): null
                                    
                        ))
                    }
                    
                </section>
                
                <Advert></Advert>

            </div>        
            <div className='latest-jobs-container'>
                <h5>Latest bursaries</h5>
                {data ? (
                    <div>
                        {data.bursaries ? (
                            
                            <bursaries bursaries={data.bursaries} /> 

                            ) : (
                                //TO DO: Point to a No-data-Component
                                <p>No bursaries data available.</p>
                        )}
                    </div>
                    ) : (
                        //Loading
                        <div class="loader"></div>
                )}
            </div>
        </div>
    )
}

export default BursaryDetails;