import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderContainer from './components/Header.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Resume from './components/Resume.js'
import Contact from './components/Contact.js'
import Project from './components/Project'

const project1Data = {
    name: "derp",
    description: "stuff and things"
}

const Project1 = () => {
    return <Project project={project1Data}/>
}

const project2 = {};

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderContainer />
                    <NavBar></NavBar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/resume" component={Resume} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/project1" component={Project1} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
