import './job-details.css'
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Jobs from './jobs';
import Advert from './advert'
import YouthCafeDatabase from './fetchData';
import { Link as LinkScroll } from 'react-scroll';


const JobDetails = ({jobs}) =>{

    const data = YouthCafeDatabase()
    
    const { tittle } = useParams();
    const job = jobs.find((j) => j.tittle === tittle);

    console.log(tittle)
    if (!job) {
        return <div>Jobs not found</div>;
    }

    return(

        <div className='frame-job-details'>
            <div className='job-details-container' >
                <h2> <span>{job.employer}</span>: {job.tittle}</h2>

                <section className='job-header'>

                    <div className='job-header-details'>
                        {/* <img src={job.logo} /> */}
                        <div className='job-header-img-container'>
                            <img src={require('../assets/media/Logo-Youth-Cafe-full.png')} alt={job.employer} />
                        </div>
                        <div className='job-info'>
                            <p>
                                <span>Employer</span>: {job.employer} <br/>
                                <span>Position</span>: {job.tittle} <br/>
                                <span>Location</span>: {job.location} <br/>
                                <span>Closing Date</span>: {job.closing} <br/>
                                <span>Date Posted</span>: {job.posted}
                            </p>

                        </div>
                    </div>

                    <div className='job-header-about'>
                        <h5>About {job.employer}</h5>
                        <p>{job.introduction}</p>
                    </div>

                </section>

                <section className='job-description'>

                    <h4>Job description</h4>
                    <p>{job.description}</p>
                    <br />
                    <h4>Role resposibilties</h4>
                    <ul>
                        { job.responsibility ?(
                            job.responsibility.map((responsibility) =>(
                                <li key={responsibility}>{responsibility}</li>
                            ))
                        ): null
                        }
                    </ul>

                </section>

                <section className="min-req-exp">
                    <h4>Minimum Experience</h4>
                    <ul>
                        { job.exp ?(
                            job.exp.map((experience) =>(
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
                                job.qualifications.map((qualification) => (
                                    <li key={qualification} >{qualification}</li>
                                ))
                            }
                        </ul> 
                        
                    </div> 

                    <div className='job-skill' >
                        <h4>Skills</h4>     
                        <ul>
                            {
                                job.skills.map((skill) => (
                                    <li key={skill} >{skill}</li>
                                ))
                            }
                        </ul>
                    </div>
                </section>

                <Advert></Advert>

                <section className='job-apply'>
                    <h4>How to apply</h4>
                    {                       
                        job.apply.map((applyMethod) =>(

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
            {data ? (
                <div>
                    {data.jobs ? (
                        
                        <Jobs jobs={data.jobs} /> 

                        ) : (
                            //TO DO: Point to a No-data-Component
                            <p>No jobs data available.</p>
                    )}
                </div>
                ) : (
                    //TO DO: Point to a No-data-Component
                    <p>Loading...</p>
            )}
            </div>
        </div>
    )
}

export default JobDetails;