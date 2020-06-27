import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from './Components/Header';
import NavbarHeader from './Components/NavbarHeader';
import AboutMe from './Components/AboutMe';
import MyResearch from './Components/MyResearch';
import MyExperiences from './Components/MyExperiences';
import FooterInfo from './Components/FooterInfo'

//Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container className="App" fluid>
      <NavbarHeader />
      <Header />
      <Switch>
        <Route path='/' exact component={AboutMe}/>
        <Route path='/aboutme' exact component={AboutMe}/>
        <Route path='/research' exact component={MyResearch}/>
        <Route path='/experiences' component={MyExperiences}/>
      </Switch>

      <FooterInfo />
      </Container>
    </Router>
  );
}

export default App;
