import './job-details.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import Jobs from './jobs';
import jobsData from '../data/jobs.json'
import Advert from './advert'
const JobDetails = ({jobs}) =>{
    const { id } = useParams();
    const job = jobs.find((j) => j.id === id);

    //console.log(id)
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
                            <img src={require('../assets/media/tipegraphics-logo.png')} alt={job.employer} />
                        </div>
                        <div className='job-info'>
                            <p>
                                <span>Employer</span>: {job.employer} <br/>
                                <span>Position</span>: {job.tittle} <br/>
                                <span>Location</span>: {job.location} <br/>
                                <span>Closing Date</span>: {job.closing} <br/>
                                <span>Date Posted</span>: {job.posted}
                            </p>

                            {/* <p><span>Employer</span>: {job.employer}</p>
                            <p> <span>Position</span>: {job.tittle}</p>
                            <p> <span>Location</span>: {job.location}</p>
                            <p> <span>Closing Date</span>: {job.closing}</p>
                            <p> <span>Date Posted</span>: {job.posted}</p> */}
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

                </section>

                <Advert></Advert>

                <section className='job-qualification-skill'>
                    <div className='job-qualification'>
                        <h4>Qualifications</h4>
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

                            (applyMethod.state)? <p key={applyMethod.name} > {applyMethod.name}</p> : null
                        ))
                    }
                </section>
                
                <Advert></Advert>

            </div>
            
            <div className='latest-jobs-container'>
                <Jobs  jobs={jobsData.jobs} />
            </div>
        </div>
    )
}

export default JobDetails;