import './success.css'
import Emoji from "react-emoji-render";
import { Link } from 'react-router-dom';


export const PayFastSuccess = () => {

    return (
        <section className='checkout'>
            <div>
                <img src={require('../assets/media/payment_success.png')} alt='Logo'/>
                <h5>Payment was successfull!</h5>
            </div>
            <h3>Thank you for your donation!! <span><Emoji text=":)" /></span> </h3>
            <br />
            <Link to={'/'} type="button" className='btn-job-cafe'>Home</Link>
        </section>
    )
}