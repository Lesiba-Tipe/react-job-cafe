// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/shared/header'
import Footer from './components/shared/footer'
import Home from './components/home'
import Jobs from './components/jobs'
// import jobsData from './data/jobs.json'
import YouthCafeDatabase from './components/fetchData'
//import jobsData from './data/jobs.json'
//import jobsData from 'http://localhost:3000/api/youthcafe'
import JobDetails from './components/job-details';
import Privacy from './components/privacy';

function App() {

  const data = YouthCafeDatabase()
  return (
    <Router>
      <div className="App font-sans">
        <Header/>
        <div className='content'>
          <Routes>
           
            <Route path='/' element={<Home/>} >  </Route>          
            <Route path='/jobs' 
              element = 
              { 
                data ? (
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
              )} >           
            </Route>

            <Route path='/internships' element={<Home/>} >  </Route>
            <Route path='/learnerships' element={<Home/>} >  </Route>
            <Route path='/bursary' element={<Home/>} >  </Route>
            <Route path='/evasity' element={<Home/>} >  </Route>
            <Route path='/jobs/:tittle' 
              element = 
              { 
                data ? (
                  <div>
                      {data.jobs ? (
                          
                          <JobDetails jobs={data.jobs} />
  
                          ) : (
                            //TO DO: Point to a No-data-Component
                            <p>No jobs data available.</p>
                      )}
                  </div>
                ) : (
                  //TO DO: Point to a No-data-Component
                  <p>Loading...</p>
              )} >           
            </Route>
            <Route path='/privacy' element={<Privacy/>} >  </Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
