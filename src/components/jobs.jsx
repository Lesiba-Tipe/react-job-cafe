import './jobs.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({jobs}) =>{
    return (

        <section className='frame-jobs'>
           <h4>Latest Internships</h4>

          <div className='job-container'>
                {jobs.map((job) => (
                        
                    // <li key={post.id}>
                    // <Link to={`/post/${post.id}`}>{post.title}</Link>
                    // </li>
                    
                    <div key={job.id} className='job-card card-grow shadow'>

                        <div className='job-card-header'>
                            <h5>{job.employer}: {job.tittle}</h5>
                        </div>

                        <div className='job-card-body'>
                            
                            
                            <div className="img-logo">
                                <img src={require('../assets/jobCafe-logo.png')} alt='Logo'/>
                            </div>

                            <Link to={`/jobs/${job.id}`}>
                                <div className='job-info'>
                                    <p>Location: {job.location}</p>
                                    <p>Closing Date: {job.closing}</p>
                                    <p>Date Posted: {job.posted}</p>
                                </div>
                            </Link>

                        </div>

                        <div className='job-card-footer'>

                            <div className='bi bi-person-fill'>                               
                                <span>:Posted by Admin | 08-Jan-2024</span>
                            </div>

                            <div className='btn-mobile'>
                                <Link to={`/jobs/${job.id}`}>
                                <button className='btn'>Go &gt;&gt;</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                ))}
          </div>

           
        </section>
    )
}

export default Jobs;


