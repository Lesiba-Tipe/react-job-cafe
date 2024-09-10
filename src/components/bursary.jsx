import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Emoji from "react-emoji-render";
import './jobs.css'


const Bursary = ({jobs}) => {

    const [filteredJobs, setFilteredJobs] = useState([]);

    const scrollToTop = () => {
        const scrollToTop = () => {
          const c = document.documentElement.scrollTop || document.body.scrollTop;
          if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 4); // Adjust the 4 to control the scrolling speed
          }
        };
        scrollToTop();
    };

    useEffect(() => {
       
        const formatDate = (closingDate) => {
        
            const currentDate = new Date();     //current
    
            //const closingDate = '12 Jan 2025' // 140224 130124
            const day = closingDate.slice(0,2);
            const monthName =  closingDate.slice(3,6).toLowerCase();
            const year = closingDate.slice(-4);
    
            const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            const month = monthNames.findIndex( name => name == monthName) + 1
    
            const formatClosingDate = `${year}-${month}-${day}`
    
            const date = new Date(formatClosingDate) //closing Date
            //console.log('Current Date', currentDate)
            //console.log('----------------------------')
            //console.log('Date', date)
            
            if(currentDate <= date.setDate(date.getDate() + 1)) {
                //console.log("Not Expired: " + job.tittle) 
                //console.log('----------------------------')  
                return true        
            }else{
                //onsole.log("Expired: " + job.tittle)
                //console.log('----------------------------')
                return false
            }

        }       
        
        const jobFilter = jobs.filter(job => (
            (formatDate(job.closing) || job.closing.toLowerCase() === 'Not specified'.toLowerCase()) 
            //(formatDate(job.closing) || job.closing === 'not specified') 
        ))
        setFilteredJobs(jobFilter);

        //console.log("JobFilter: ", jobFilter)
        //console.log("Jobs: ", jobs)

    },[]);

    return(

        <section className='frame-jobs'>
            <h4>Bursaries</h4>
            {            
                filteredJobs.length === 0 ?
                (
                    <div>There's currently no bursaries on our database, please check us later!!!<Emoji text=":)" /> </div>
                ):
                (
                    <div className='job-container'>
                        {
                            filteredJobs.map((job) => (    
                                <Link  to={`/bursaries/${job.tittle.replace(/ /g, "-")}`}>
                                    <div key={job.tittle} className='job-card card-grow shadow'>

                                        <div className='job-card-header'>
                                            <h5>{job.sponsor}: {job.tittle}</h5>
                                        </div>

                                        <div className='job-card-body'>
                                            
                                            
                                            <div className="img-logo">
                                                <img src={require('../assets/media/Logo-Youth-Cafe-full.png')} alt='Logo'/>
                                            </div>
                                            

                                            
                                                <div onClick={scrollToTop} className='job-info'>
                                                    <p>Location: {job.location}</p>
                                                    <p>Closing Date: {job.closing}</p>
                                                    <p>Date Posted: {job.posted}</p>
                                                </div>
                                        
                                        </div>

                                        <div className='job-card-footer'>

                                            <div className='bi bi-person-fill'>                               
                                                <span> Posted by: Admin  </span>
                                            </div>

                                            
                                        </div>

                                    </div>
                                </Link>

                            ))
                        
                        }
                    </div>
                )

            }   
        </section>
    )
}

export default Bursary;


