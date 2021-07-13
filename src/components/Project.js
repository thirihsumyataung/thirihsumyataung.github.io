import React from 'react'
import { Card } from "react-bootstrap"; 

const Project = ({myproject}) => {
    const { projectName, url , description, courseName} = myproject; 
    return (
        <Card className="my-3 p-3 rounded"> 
           
            <Card.Body> 
                <Card.Title as="div"> 
                <a href={url}> <strong>{projectName}</strong></a></Card.Title>
            </Card.Body>
            <Card.Text as="div"> 
                <div className="my-3"> 
                {description}
                </div>
            </Card.Text>

            <Card.Text as="h3"> 
                {courseName}
            </Card.Text>
        </Card>
    )
}

export default Project
