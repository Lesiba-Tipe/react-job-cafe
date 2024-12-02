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
import Internships from './components/internships';
import Bursary from './components/bursary';
import AboutUs from './components/about-us';
import ContactUs from './components/contact-us';
import EVasity from './components/e-vasity';
import BursaryDetails from './components/bursary-details';
import Donate from './components/donate';
import { PayFastSuccess } from './components/success';

function App() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {

     const fetchData = async () => {
         setIsLoading(true);
         //
         YouthCafeDatabase()
         .then((response) => 
          {
            //console.log('RESPONSE',response.json())
            return response.json()
          })
         .then((json) => {
            //alert('Server is running succesfully...')
            setData(json);
            //console.log('DATA:',json)
            setIsLoading(false);
         })
         .catch((err) =>
          {
            
            if(err == 'TypeError: NetworkError when attempting to fetch resource.'){
              alert('Server is not running. Please try again later.')
              
            }
            console.error('SERVER:',err) 
          })
         
     };
     
     fetchData();
     
 }, []);
 

  return (
    <Router>
      <div className="App font-sans  wrapper">
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

            <Route path='/internships' 
              element = 
              { 
                data ? (
                  <div>
                      {data.jobs ? (
                          
                          <Internships jobs={data.jobs} /> 
  
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
            
            <Route exact path='/learnerships' element={<Home/>} >  </Route>
            <Route path='/bursary' 

              element=
              { 
                data ? (
                  <div>
                      {data.jobs ? (
                          
                          <Bursary jobs={data.bursaries} /> 
  
                          ) : (
                            //TO DO: Point to a No-data-Component
                            <p>No jobs data available.</p>
                      )}
                  </div>
                ) : (
                  //TO DO: Point to a No-data-Component
                  <p>Loading...</p>
              )}>    
            </Route>
            <Route path='/bursaries/:tittle' 
              element = 
              { 
                data ? (
                  <div>
                      {data.bursaries ? (
                          
                          <BursaryDetails bursaries={data.bursaries} />
  
                          ) : (
                            //TO DO: Point to a No-data-Component
                            <p>No bursaries data available.</p>
                      )}
                  </div>
                ) : (
                  //TO DO: Point to a No-data-Component
                  <p>Loading...</p>
              )} >           
            </Route>

            <Route 
              path='/e-vasity' 
              element = 
              { 
                data ? (
                  <div>
                      {data.vasities ? (
                          
                          <EVasity vasities={data.vasities} /> 
                            
                          ) : (
                            //TO DO: Point to a No-data-Component
                            <p>No vasity data available.</p>
                      )}
                  </div>
                ) : (
                  //TO DO: Point to a No-data-Component
                  <p>Loading...</p>
              )} >            
            </Route>

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
            <Route path='/contact-us' element={<ContactUs/>} >  </Route>
            <Route path='/about-us' element={<AboutUs/>} >  </Route>
            <Route path='/privacy' element={<Privacy/>} >  </Route>
            <Route path='/donate' element={<Donate/>} >   </Route>
            <Route path='/donate/success' element={<PayFastSuccess/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
