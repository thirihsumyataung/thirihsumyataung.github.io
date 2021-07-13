import React from 'react'
import { Row, Card, Col , Button } from "react-bootstrap"; 
//import Project from './Project';
import {mySchoolProjects} from "../data.js"; 
const SchoolProjects = () => {
    return (<> 



    <h1 className="myTitles">School Projects</h1>
     <p className="underline"></p>
        <Row id="schoolprojects" className="schoolprojects"> 
            { mySchoolProjects.map( (proj) => { 
                const { url, projectName, description, courseName, img} = proj; 
                return ( 
                    <Col key={proj.id} sm={12} md={6} lg={4} xl={3} style={{marginRight: "20px" , marginBottom: "20px"}}> 
                    
                     <Card className="my-3 p-3 rounded" > 
                        <Card.Img src={img} alt="project image"/> 
                
                        <Card.Title as="div"> 
                        <a href={url}> <strong>{projectName}</strong></a></Card.Title>
                    
                    <Card.Text as="div"> 
                        <div className="my-3"> 
                        {description}
                        </div>
                    </Card.Text>
        
                    <Card.Text as="h5"> 
                        {courseName}
                    </Card.Text>
                    
                </Card>
                    </Col>
                   
                )
            })}
        </Row>

        </> 
    )
}

export default SchoolProjects
