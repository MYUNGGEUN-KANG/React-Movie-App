import React from 'react'
import './About.css'

function About(props){

    console.log(props)
return(
    <div>
    <div className="about__container">
           
            <span>
            The way to get started is to quit talking and begin doing.
            </span>
            <span>-Walt Disney</span>
    </div>

     <div className="about__container">
     <span>
    This page is Designed by <h4>Developer : nick-kang</h4>
     </span>
    </div>
    </div>
    );
}
export default About;