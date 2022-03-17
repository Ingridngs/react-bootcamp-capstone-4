import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import info from './featured-banners.json'


export const Banner = () => {

    const newData = JSON.parse(JSON.stringify(info.results))
    console.log(newData)

    return (
    
        <div className = 'slide-container' >
            <FontAwesomeIcon icon={ faArrowCircleLeft }  onClick={()  =>  {}}/>
            {
                newData.map(( image, i  )=> {
        
                    return   (
                         <div className='single-item'>
                            <img key={ i } src={ image[0] } 
                          
                            alt='furniture'
                            />    
                        </div>
                   
                   )   
                    }


               ) }
          
                <FontAwesomeIcon icon={ faArrowCircleRight }  />
        </div>
             )
             
         }