import React from 'react'; 
import { Container } from "react-bootstrap"; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Intro from './components/Intro'; 
import Projects from './components/Projects';
import Header from './components/Header'; 
import Contact from './components/Contact';
import SchoolProjects from './components/SchoolProjects';
import ProjectsInSlide from './components/ProjectsInSlide';
import ProjectInTabs from './components/ProjectInTabs';
import ShowingProject from './components/ShowingProject';
import Ecommence from './components/Ecommence';
import ProjectHolder from './components/ProjectHolder';
function App() {
  return (
    <div> 
      <Router basename='/'> 
        <Header/>
        <main className="py-3"> 
         <Container> 
         <Route path= "/" component={Intro} exact/>
         {/* <Route path="/projects" component={Projects}/>  */}
         <Route path="/about" component={Intro}/> 
         <Route path="/contact" component={Contact}/> 

         {/* <Route path="/SchoolProjects" component ={SchoolProjects}/> 
         <Route path="/ShowingProjects" component={ShowingProject}/> 
         <Route path="/ecommence" component={Ecommence}/>  */}
         <Route path="/projects" component={ProjectHolder}/> 

    </Container>
     
       
        </main>
    </Router>
     
     
    </div>
  );
}

export default App;
