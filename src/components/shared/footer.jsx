import { Link } from 'react-router-dom';
import './footer.css'
import QuickLinks from './quickLinks';
const Footer = () =>{
    return (


        <footer>   
            <QuickLinks></QuickLinks>         
            <p className="developer"> 
                Powered By: Youth Cafe   | {new Date().getFullYear()} | &copy; Copyright Reserved. |
                <Link to='/privacy' ><span> Privacy & Policy</span></Link> | 
                <Link to='/privacy'><span> Disclaimer</span></Link> |
            </p>
        </footer>
    )
}

export default Footer;