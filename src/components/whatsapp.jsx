import React from 'react';

const WhatsAppButton = () => {
  // Replace 'PHONE_NUMBER' with the actual phone number and 'MESSAGE' with your desired message
  const phoneNumber = '+27614384107';
  const message = 'Hello.';
  //const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      Click here to chat on WhatsApp
    </a>
  );
}

export default WhatsAppButton;