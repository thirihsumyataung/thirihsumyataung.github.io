import React from 'react'; 
import { Container } from "react-bootstrap"; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './components/Intro'; 
import Projects from './components/Projects';
import Header from './components/Header'; 
function App() {
  return (
    <div> 
      <Router> 
        <Header/>
        <main className="py-3"> 
         <Container> 
         <Route path= "/" component={Intro} exact/>
         <Route path="/projects" component={Projects}/> 
    </Container>
     
       
        </main>
    </Router>
     
     
    </div>
  );
}

export default App;
