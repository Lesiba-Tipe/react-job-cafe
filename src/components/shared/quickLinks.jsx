import './quickLinks.css'
import React from 'react';
import FileDownload from '../fileDownload';
import YouthCafeDatabase from '../fetchData';

const QuickLinks = () =>{
  const data = YouthCafeDatabase()

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
                            <li><FileDownload file={file} ></FileDownload></li>
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