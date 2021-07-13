import React , {useState} from 'react'; 
import "./projectInTabs.css"; 
import { FaAngleDoubleRight } from 'react-icons/fa'
import { projects } from "../data.js"; 
import { mySchoolProjects } from '../data.js';
const ProjectInTabs = () => {
   // const [project, setProject] = useState(projects); 
    const [ value, setValue] = useState(0); 
   // const { img, url , projectName, description } = project;
    return (<section className="section">
    <div className="title">
      <h2>Projects</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {
          projects.map((item, index) => {
              //const { img, url , projectName, description } = item; 
            return <button key={item.id} onClick={() => {
              setValue(index)
            }} className={`job-btn ${index === value && 'active-btn'}`}>{item.projectName}</button>
          })
        }
      </div>
       {/* job info */ }

      <article className="job-info">
        <h3>{mySchoolProjects.projectName}</h3>
        <h4>{mySchoolProjects.courseName}</h4>
        <p className="job-date">{mySchoolProjects.projectName}</p>
        {mySchoolProjects.map((proj, index) => {
          return <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon">

            </FaAngleDoubleRight>
            <p>{proj}</p>
            
          </div>
        })}
      </article>
    </div>
  </section>); 
}


export default ProjectInTabs
