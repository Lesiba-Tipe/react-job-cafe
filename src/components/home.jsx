import React, { useState, useEffect } from 'react';
import './home.css'

import Jobs from './jobs';

import Emoji from "react-emoji-render";
import YouthCafeDatabase from './fetchData';
import WhatsAppButton from './whatsapp';


const Home = () => {

     const [data, setData] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            //
            YouthCafeDatabase()
            .then((response) => {return response.json()})
            .then((json) => {
                setData(json);
                setIsLoading(false);
            })
            .catch((err) => console.error(err))
            
        };
        
        fetchData();
        
    }, []);
    
    return (

        <div className='home'>                 
            <p  className='notice-board'>This is a beta version with <strong>NO ADS</strong>. Please bare with us!!! we are working on more features <Emoji text=":)" />
            </p>

            
            <section className='introduction '>
                <div>
                    <p className='welcome-msg'>
                                          
                        Welcome to Job Cafe, where career aspirations meet limitless opportunities! We understand the importance of finding the perfect job that aligns with your skills, passions, and professional goals. Our mission is to connect talented individuals with employers seeking exceptional talent, fostering a dynamic and mutually beneficial relationship. 

                    </p>
                    <p>Please note that we make necessary research about the job before we post it... <span>wena just apply.</span> </p>
                </div>
            </section>


            {/* <Routes>
              <Route path='/' element={<Jobs jobs={latestJobs.jobs} />} > </Route>         
            </Routes> */}
     
            {data ? (
                <div>
                    {data.jobs ? (
                        
                        <Jobs jobs={data.jobs} /> 

                        ) : (
                            //TO DO: Point to a No-data-Component
                            <div className='loader-container'>
                                <h4>Latest Jobs</h4>                              
                                <p>No jobs data available.</p>
                            </div>
                    )}
                </div>
                ) : (
                    //TO DO: Point to a Null-Component
                    <div className='loader-container'>
                        <h4>Latest Jobs</h4>
                        <div>
                            <div className="loader"></div>                       
                            <p>Loading... Please wait. </p> 
                        </div>
                    </div>
            )}

           

        </div>
    )
}

export default Home;