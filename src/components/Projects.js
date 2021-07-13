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
    return (<div className="card-body" id="projects"> 
    <h1 className="myTitles">Projects</h1>
    <p className="underline"></p>
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