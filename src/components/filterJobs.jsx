
import React, { useState, useEffect } from 'react';
import YouthCafeDatabase from './fetchData';


const FilterJobs = () =>{
    const data = YouthCafeDatabase()
    const [jobs, setJobs] = useState(data.jobs);

    const [filteredJobs, setFilteredJobs] = useState([]);

    
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
            console.log('----------------------------')
            console.log('Date', date)
            
            if(currentDate <= date.setDate(date.getDate() + 1)) {
                console.log("Not Expired")   
                return true        
            }else{
                console.log("Expired")
                return false
            }

        }
        
        
        if(jobs){
            console.log('JOBS: ', jobs)
            const jobFilter = jobs.filter(job => (
                (formatDate(job.closing) || job.closing === 'Not specified') 
            ))
            setFilteredJobs(jobFilter);
        }

    },[]);

    return filteredJobs
}

export default FilterJobs;