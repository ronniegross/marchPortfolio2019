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

const gnarniaData = {
    name: "Gnarnia: Lift Ticket and Gear Rental App",
    homePagePic: "https://i.imgur.com/hYHtF7s.jpg",
    description: "",
    techUsed: "",
    deployedAppLink: "",
    gitHubLink: "",
    trelloLink: "",
    requirements: "",
    goals: "",
    mockup1: "",
    mockup2: "",
    mockup3: "",
    mockup4: "",
    mockup5: "",
    version2: "",
    finalThoughts: "",
    UXprocess: "",
}

const Gnarnia = () => {
    return <Project project={gnarniaData}/>
}

const project2 = {
    name: "",
    homePagePic: "",
    description: "",
    techUsed: "",
    deployedAppLink: "",
    gitHubLink: "",
    trelloLink: "",
    requirements: "",
    goals: "",
    mockup1: "",
    mockup2: "",
    mockup3: "",
    mockup4: "",
    mockup5: "",
    version2: "",
    finalThoughts: "",
    UXprocess: "",

};

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
                        <Route exact path="/project1" component={Gnarnia} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
