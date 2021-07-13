import React, {useState} from 'react'; 
import { Nav, Container } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import { Link } from "react-router-dom"; 
import "./showingProject.css"; 
 import { FaAngleDoubleRight } from 'react-icons/fa'; 

import { typeOfProjects } from "../data"; 
const ShowingProject = () => {
    const [proj, setProj] = useState(typeOfProjects); 
    const [value, setValue] = useState(0); 
    const [projArray , setProjArray] = useState([]); 

    //setProj(typeOfProjects); 
    console.log(proj); 
    setProjArray(Object.keys(proj)); 
    //console.log(projArray); 
    const {id, url, projectType} = proj;

    return ( 
<> 
        <div className="btn-container">
        {
          proj.map((item, index) => {
            return <button key={item.id} onClick={() => {
              setValue(index)
            }} className={`job-btn ${index === value && 'active-btn'}`}>
                <Link to={url}>{item.projectType}</Link></button>
          })
        }
      </div>
        <article className="job-info">
       
        {proj.map((duty, index) => {
             <h3>{projectType}</h3>
            
          return   <Container> 
          <LinkContainer to={duty.url} key={index} className="job-desc"> 
              <FaAngleDoubleRight className="job-icon">

            </FaAngleDoubleRight>
         </LinkContainer>
     </Container> 
          
        })}
      </article>

      </> 
    )
}

export default ShowingProject
