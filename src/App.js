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
    goal: "To create an application that will allow users to reserve snowboarding gear, ski gear, and a lift ticket in order to achieve radical gnar",
    description: [
        "Has at least 3 models",
        "Has full CRUD on at least one of your models",
        "Be able to add / delete on any remaining models",
        "Use the Mongoose library to write Mongo queries",
        "Have high quality code",
        "Efficient code- if you have your MVP, refactor",
        "DRY (Don't Repeat Yourself) code",
        "Be deployed on Heroku"
    ],
    techUsed: [],
    deployedAppLink: "https://gnarnia.herokuapp.com/",
    gitHubLink: "",
    trelloLink: "",
    requirements: "",
    goals: "",
    ERD: "https://i.imgur.com/BiAMPcj.jpg",
    mockups: [
        {
            number: "1",
            link: "https://i.imgur.com/BiAMPcj.jpg"
        },
    ],
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
    goal: "",
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
