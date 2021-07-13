import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Form, ListGroupItem, Image, ListGroup } from "react-bootstrap"; 
import { socialMedias } from '../data';  
//import "./intro.css"; 
//import Contact from "Contact"
import Contact from './Contact';
const myImage = "https://avatars.githubusercontent.com/u/61168937?v=4"; 
export default function Intro() {
   // const image = "https://avatars.githubusercontent.com/u/61168937?v=4"; 
    return (       
       <> 
       <Row> 
          <Col md={6}> 
         <Image src={myImage} alt="Thiri Hsu Myat Aung" style={{marginRight: "20px" }}/> 
          </Col>
          <Col md={8} sm={12} lg={4} xl={6} xs={12} style={{marginTop:"12px"}}>  
             
            <h5 >Hello , I'm Thiri.</h5>
            <p> "I always consider myself as a forever student and eager to both build on my academic foundations and learn in coding.
               I'm currently working on React Frontend projects and keep updating on my portfolio website." 
            </p>
            
               <strong>Experience: </strong> 
                
               Worked as Grader for Assembly Language Programming COMP - 2030 at University of Massachusetts Lowell
            <p> 
               <br></br>
            </p>
            <h6><strong>Education:  </strong></h6>
           
             <li>Bachelor of Computer Science at Towson Unversity </li>
             <li>Bachelor of Electrical Engineering at WYTU</li>
           

         
          
               More about me: 
            { socialMedias.map ((socials)=> {
               const { id, url, icon} = socials; 
               return ( <a key={id} href={url} className="icons">{icon} </a>)
              })
             }
           
         
           
          </Col>

          <Col sm={12} md={12} lg={12} xl={12} xs={12} style={{marginTop: "20px"}}>
           <p className = "techs"> 
              <h5> Languages, Services and Technologies I love to use : </h5>
               <img className = "tech-logos" alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
               <img className = "tech-logos" alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
               <img className = "tech-logos" alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/>
               <img className = "tech-logos" alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>
               <img className = "tech-logos" alt="Bitbucket" src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"/>
               <img className = "tech-logos" alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
               <img className = "tech-logos" alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>

           </p>
           
          </Col>

       </Row>
       
      
       </> 
    )
}
