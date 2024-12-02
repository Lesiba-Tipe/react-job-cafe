import './quickLinks.css'
import React from 'react';
import FileDownload from '../fileDownload';
import YouthCafeDatabase from '../fetchData';
import { useState, useEffect } from 'react';

const QuickLinks = () =>{
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {

     const fetchData = async () => {
         setIsLoading(true);
         //
         YouthCafeDatabase()
         .then((response) => {return response.json()})
         .then((json) => {
             setData(json);
             setIsLoading(false);
         })
         .catch((err) => console.error(err))
         
     };
     
     fetchData();
     
 }, []);

    return (

        <section className='quick-links'>
            <h4>Quick Links</h4>
            <div>
              <ul>
                
                {data ? (                 
                  <div>
                      {data.files ? (
                          //console.log(data.files)
                          data.files.map((file) => (                           
                            <li key={file.name} >
                              <FileDownload  file={file} ></FileDownload>
                            </li>
                            )) 

                          ) : (
                              //TO DO: Point to a No-data-Component
                              <p></p>
                      )}
                  </div>
                  ) : (
                      //TO DO: Point to a Null-Component
                      <p></p>
                )}
                
              </ul>
            </div>
        </section>
    )
}

export default QuickLinks;