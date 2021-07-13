import React from 'react'
import {ecomProjects} from"../data.js"; 
import {Card, Row, Col} from "react-bootstrap"; 
const Ecommence = () => {
    const {projName, id, url, description, img, status}  = ecomProjects; 
    
       return ( <> 
         <h1 className="myTitles"> E-commerce </h1>
    <p className="underline"></p>
       <Row id="schoolprojects" className="ecommence"> 
           { ecomProjects.map( (proj) => { 
               const { url, projName, description, img, status} = proj; 
               return ( 
                   <Col key={proj.id} sm={12} md={6} lg={4} xl={3} style={{marginRight: "40px" , marginBottom: "20px"}}> 
                   
                    <Card className="my-3 p-3 rounded" > 
                    <span class="notify-badge">{status}</span>
                       <Card.Img src={img} alt="project image"/> 
               
                       <Card.Title as="div" className="my-3"> 
                       <a href={url}> <strong>{projName}</strong></a></Card.Title>

                    <Card.Text as="div"> 
                       <div className="my-3"> 
                       {description}
                       </div>
                   </Card.Text>
       
                   
               </Card>
                   </Col>
                  
               )
           })}
       </Row>
    
       </> )
  
}

export default Ecommence
