import { useState, useEffect } from 'react';

const YouthCafeDatabase = () => {

    const url = 'https://server.tipegraphics.co.za/api/youthcafe/'
    //const url = 'http://localhost:3001/api/youthcafe'

    const [data, setJsonData] = useState([]);
  
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const xdata = await response.json();
        //console.log('Success: ', xdata)
        setJsonData(xdata);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []); 
    
  return data

};

export default YouthCafeDatabase;