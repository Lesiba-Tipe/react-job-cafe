import './donate.css'
import React, { useState } from 'react';

import { FormCheckout } from '../services/payfast';

const Donate = () => {

    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    const [finalAmount, setFinalAmount] = useState('');
    const [getFirstname, setFirstname] = useState('');
    const [payfastData, setPayfastData] = useState({
        amount: '',
        firstname: '',
        email: ''
    });

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    // Handle checkbox state change
    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
    };

    const handleButtonClick = (amount) => {
      setSelectedAmount(amount);
      setCustomAmount(''); 
      //setFinalAmount(amount)

      setPayfastData((prevUser) => ({
        ...prevUser, // Spread the previous state
        amount: amount, // Update only the name property
      }));
    };

    const handleChange = (e) => {
        setCustomAmount(e.target.value);
        //setFinalAmount(e.target.value)
        //payfastData.amount = e.target.value
        setPayfastData((prevUser) => ({
            //...prevUser, // Spread the previous state
            amount: e.target.value, 
        }));
    };

    const handleFirstNameChange = (e) => {
        setFirstname(e.target.value)
        setPayfastData((prevUser) => ({
            ...prevUser, // Spread the previous state
            firstname: e.target.value, // Update only the name property
          }));
    };

    const handleEmailChange = (e) => {
        
        setPayfastData((prevUser) => ({
            ...prevUser, // Spread the previous state
            email: e.target.value, // Update only the name property
          }));
    };

    //setPayFastData
    return(
       <section>
           <div className="img-container">
                <img className='img-donate' src={require('../assets/media/pexels-pixabay-36717.jpg')} alt="" />
                <div className='overlay-text'>
                    <p>
                        <span className='text-donate'>DONATE</span>
                        <br />
                        Please help us improve
                    </p>
                                       
                </div>
           </div>

           <div className="donate-card">

                    <div className="amount-selector">
                        <div className="button-group">
                            <button className={`btn-job-cafe ${selectedAmount === '10' && customAmount === '' ? 'selected' : ''}`} onClick={() => handleButtonClick('10')}>
                                <span className='text-bold' >R</span>10
                            </button>
                            
                            <button className={`btn-job-cafe ${selectedAmount === '20' && customAmount === '' ? 'selected' : ''}`} onClick={() => handleButtonClick('20')}
                            >
                            <span className='text-bold' >R</span>20
                            </button>
                            
                            <button
                            className={`btn-job-cafe ${selectedAmount === '50' && customAmount === '' ? 'selected' : ''}`}
                            onClick={() => handleButtonClick('50')}
                            >
                                <span className='text-bold' >R</span>50
                            </button>
                        </div>

                        <div>
                            <input className="custom-input" name="amount" type="number" value={payfastData.amount} placeholder="Enter custom amount" onChange={handleChange} />
                        </div>


                        {!isCheckboxChecked && (
                                
                            <div className='personal-details'>
                                <input className="custom-input" name="email" type="text" value={payfastData.email} onChange={handleEmailChange} placeholder="someone@company.com"
                                />

                                <input className="custom-input" name="firstname" value={payfastData.firstname} placeholder="Enter your name" onChange={handleFirstNameChange} />
                            </div>
                            )
                        }

                        <div class="form-check">                       
                            <input  class="form-check-input" type="checkbox" checked={isCheckboxChecked} value="" id="flexCheckDefault" onChange={handleCheckboxChange}/>
                            
                            <label class="form-check-label" for="flexCheckDefault">
                                Make me Anonymous
                            </label>
                        </div>

                        <FormCheckout payfast={payfastData} ></FormCheckout>

                        
                    </div>

            </div>

            <div className='disclaimer'>

                 <p> <span className="text-base italic ">Disclaimer</span>  
                    <br />
                    We value your privacy and security. Please note that we do not collect, store, or process any personal or banking information on our website.
                    <br /> 
                    Firstname is used as reference on your Proof of payment and email is used to send proof of payment by our payment gateway.
                    <br />
                    For more information contact us on <span className='font-semibold'>contact@youthcafe.tipegraphic.co.za</span> 
                </p>       
            </div>
            
       </section>
    )
}

export default Donate