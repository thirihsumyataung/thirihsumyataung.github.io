import React , { useState, useEffect} from 'react'; 
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import "./projectInSlides.css"; 
import { projects } from "../data.js"; 
const ProjectsInSlide = () => {
    const [ project,setProject ] = useState(projects); 
    const [ index , setIndex ] = useState(0); 

    const nextSlide = () => {
        setIndex((oldIndex) => {
          let index = oldIndex + 1;
          if (index > project.length - 1) {
            index = 0; 
          }
          return index; 
        })
      }
      const prevSlide = () => {
         setIndex((oldIndex) => {
          let index = oldIndex - 1;
          if (index < 0 ) {
            index = project.length - 1; 
          }
          return index; 
        })
        
      }

      useEffect(() => {
        let slider = setInterval(() => {
          setIndex((oldIndex) => {
          let index = oldIndex + 1;
          if (index > project.length - 1) {
            index = 0; 
          }
          return index; 
        }); 
        }, 3000);
        
        return () => clearInterval(slider); 
      }, [index]); 
      
    return (
        <section className="section">
    <div className="title">
      <h2><span>/
      </span>Projects</h2>
    </div>  
    <div className="section-center">
      {project.map((project, projectIndex) => {
        const { id, url , img, projectName, description } = project;
        
        //More staff coming up here 
        let position = 'nextSlide';
        if (projectIndex=== index) {
          position = 'activeSlide';
        }

        if (projectIndex === index - 1 || (index === 0 && projectIndex === project.length - 1)  ) {
          position = "lastIndex"; 
        }

        return (<article className={position} key={id}>
          <img src={img} alt={projectName}  className="person-img" />
          <a href={url}><h4> {projectName} </h4> </a>
          <p className="title">{projectName}</p>
          <p className="text">{description}</p>
          <FaQuoteRight className="icon"/> 
        </article>)
      })}
      <button className="prev" onClick={prevSlide}>
      <FiChevronLeft/> 
      </button>
      <button className="next" onClick={nextSlide}>
      <FiChevronRight/> 
      </button>
    </div>
  </section>);
}

export default ProjectsInSlide
