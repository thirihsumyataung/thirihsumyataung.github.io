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
            
               <strong>Experience: </strong><br></br>
               <li>Software Engineer at Tata Consultancy Services</li>
               <li>Teaching Assistant / Grader for Assembly Language Programming COMP - 2030 at University of Massachusetts Lowell</li>
            <p> 
               <br></br>
            </p>
            <h6><strong>Education:  </strong></h6>
           
               <li>Bachelor of Computer Science at Towson Unversity </li>
               <li>Bachelor of Electrical Engineering at WYTU</li>
               <br></br>
            <h6><strong>License and Certifications: </strong></h6>
               <a href="https://www.credly.com/earner/earned/badge/dfcb5603-dfe9-4a5e-ba13-c8e1630434a0">AWS Certified Cloud Practitioner (CLF-C02)</a>[ Click the link to verify ]

            <br></br>
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
               <img className = "tech-logos" alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"/>
               <img className = "tech-logos" alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"/>
               <img className = "tech-logos" alt="C" src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"/> 
               <img className = "tech-logos" alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
               <img className = "tech-logos" alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
               <img className = "tech-logos" alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
               <img className = "tech-logos" alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
               <img className = "tech-logos" alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>
               <img className = "tech-logos" alt="Bitbucket" src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"/>
               <img className = "tech-logos" alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
               <img className = "tech-logos" alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
               <img className = "tech-logos" alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
           </p>
           
          </Col>

       </Row>
       
      
       </> 
    )
}
