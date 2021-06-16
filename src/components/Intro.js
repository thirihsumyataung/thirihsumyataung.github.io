import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { socialMedias } from '../data';  
import "./intro.css"; 
const myImage = "https://avatars.githubusercontent.com/u/61168937?v=4"; 
export default function Intro() {
   // const image = "https://avatars.githubusercontent.com/u/61168937?v=4"; 
    return (       
       <div className="wrapper"> 
         <img src={myImage} alt="Thiri Hsu Myat Aung" className="myImage"/>
         <div> 
           <h5>Hello , I'm Thiri.</h5>
           <h6>Education: </h6>
           <ul> 
             <li>Bachelor of Computer Science at Towson Unversity </li>
             <li>Bachelor of Electrical Engineering at WYTU</li>
           </ul>
            <h6> 
              More About me: 
              { socialMedias.map ((socials)=> {
             const { id, url, icon} = socials; 
            return ( <a key={id} href={url} className="icon">{icon} </a>)
           })
           }
              </h6>
         </div>
          <div> 
            
         
            </div> 
          
        </div>
       
    )
}
