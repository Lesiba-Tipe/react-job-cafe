import CryptoJS from 'crypto-js';
import { payfast_live, payfast_sandbox } from '../config';

export const FormCheckout = ({payfast}) => {
 
    console.log('Firstname:', payfast?.firstname)
    console.log('Amount:', payfast.amount)
    //const payfast_server = payfast_sandbox
    const payfast_server = payfast_live
    const domain = 'https://m3fsn6gw-3000.inc1.devtunnels.ms/donate/'

    //Merchant details
    const formData = {
    merchant_id: payfast_server.id,
    merchant_key: payfast_server.key,

    return_url : `${domain}success`,
    cancel_url : `${domain}cancel`,
    notify_url : `${domain}notify`,

    // Buyer details
    // name_first: "First Name",
    // name_last: "Last Name",
    email_address: payfast?.email || "pop@youthcafe.tipegraphics.co.za",
    // Transaction details
    //m_payment_id: "1234",
    amount: payfast.amount,
    item_name: payfast?.firstname || 'Anonymous'
    };

    const generateSignature = (data, passPhrase = null) => {
        // Create parameter string
        let pfOutput = "";
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            if (data[key] !== "") {
              pfOutput += `${key}=${encodeURIComponent(data[key].trim()).replace(/%20/g, "+")}&`;
            }
          }
        }
      
        // Remove last ampersand
        let getString = pfOutput.slice(0, -1);
        if (passPhrase !== null) {
          getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(/%20/g, "+")}`;
        }
      
        return CryptoJS.MD5(getString).toString();
    };

    const key = "jt7NOE43FZPn";
    
    formData["signature"] = generateSignature(formData, payfast_server.passphrase);

    return(
        <form action={payfast_server.url} method="post">

            {Object.keys(formData).map((key) => (
                formData[key].trim() !== "" && (
                    <input key={key} name={key} type="hidden" value={formData[key].trim()} />
                )
            ))}
            <input className='btn-job-cafe' value="Checkout" type="submit"/>
        </form>
    )
}

export const PayfastNotify = () => {
    
    return (
        <section>
            <p>Payfast notify works!!!</p>
        </section>
    )
}