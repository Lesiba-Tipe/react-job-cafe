// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/header'
import Footer from './components/shared/footer'
import Home from './components/home'
import Jobs from './components/jobs'
import jobsData from './data/jobs.json'
import JobDetails from './components/job-details';
import Privacy from './components/privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='content' >
          <Routes>
            <Route path='/' element={<Home/>} >  </Route>
            <Route path='/jobs' element={<Jobs jobs={jobsData.jobs}/>} >  </Route>
            <Route path='/internships' element={<Home/>} >  </Route>
            <Route path='/learnerships' element={<Home/>} >  </Route>
            <Route path='/bursary' element={<Home/>} >  </Route>
            <Route path='/evasity' element={<Home/>} >  </Route>
            <Route path='/jobs/:id' element={<JobDetails jobs={jobsData.jobs} />} >  </Route>
            <Route path='/privacy' element={<Privacy/>} >  </Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
