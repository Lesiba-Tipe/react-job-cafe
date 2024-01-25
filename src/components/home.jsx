import './home.css'
import React from 'react';
import Jobs from './jobs';
import jobsData from '../data/jobs.json'
import Emoji from "react-emoji-render";


const Home = () =>{
    return (

        <div className='home'>
            <p  >This is a beta version, please bare with us!!!<Emoji text=":)" />
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
            
            <Jobs jobs={jobsData.jobs} />
        </div>
    )
}

export default Home;