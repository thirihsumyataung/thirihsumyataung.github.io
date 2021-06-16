//import React from 'react';

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from "react-bootstrap"; 

import {projects} from '../data'; 
import "../index.css"; 
import "./project.css"; 
//import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

//import { description } from 'commander';
export default function Projects() {
    return (<div className="card-body"> 
 <div className="card-container">
            { projects.map ((proj) => { 
                const { id, url, projectName , description, img} = proj; 
                console.log(proj.description); 
    return( 
    <div key={id} className="card"> 
    <a href={url} className="card" > 
        <img src={img} alt="project-name" className="card image"/>
    </a>
        
        <p className="projName">{projectName}</p>
        <p className="projDec">{description}</p>
        </div> 
)
            })
            }
           
        </div>

    </div>
       
    )
}
{/* <CardGroup  key={id}  >
  <Card className="card">
    <Card.Img variant="top" src={img}  style={{ width: "200px"}} className="img"/>
    <Card.Body>
      <Card.Title>{projName}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardGroup> */}