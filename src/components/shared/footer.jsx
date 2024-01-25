import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () =>{
    return (

        <footer>            
            <p className="developer"> 
                Powered By: Job Cafe   | {new Date().getFullYear()} | &copy; Copyright Reserved. |
                <Link to='/privacy' ><span> Privacy & Policy</span></Link> | 
                <Link to='/privacy'><span> Disclaimer</span></Link> |
            </p>
        </footer>
    )
}

export default Footer;