import './home.css'
import React from 'react';
import Jobs from './jobs';

import Emoji from "react-emoji-render";
import YouthCafeDatabase from './fetchData';

const Home = ({jobs}) =>{
    const data = YouthCafeDatabase()
    console.log("Home Data: ", data)

    return (

        <div className='home'>
           
            
            <p className='notice-board'>This is a beta version with <strong>NO ADS</strong>. Please bare with us!!! we are working on more features <Emoji text=":)" />
            </p>
            <section className='introduction '>
                <div>
                    <p className='welcome-msg'>
                                          
                        Welcome to Job Cafe, where career aspirations meet limitless opportunities! We understand the importance of finding the perfect job that aligns with your skills, passions, and professional goals. Our mission is to connect talented individuals with employers seeking exceptional talent, fostering a dynamic and mutually beneficial relationship. 

                    </p>
                    <p>Plase note that we make necessary research about the job before we post it... <span>wena just apply.</span> </p>
                </div>
            </section>

            {/* <Routes>
              <Route path='/' element={<Jobs jobs={latestJobs.jobs} />} >  </Route>           
            </Routes> */}

            
           
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
                    //TO DO: Point to a Null-Component
                    <p>Loading...</p>
            )}



        </div>
    )
}

export default Home;