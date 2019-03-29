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


// Gnarnia
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
    techUsed: [
        "Node",
        "MongoDB",
        "Express",
        "Heroku",
        "Handlebars",
        "Sketch"
    ],
    deployedAppLink: "https://gnarnia.herokuapp.com/",
    gitHubLink: "https://github.com/ronniegross/projectTwo",
    ERD: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/ERD_Final_Gnarnia.jpg?raw=true",
    mockups: [
        {
            name: "log in",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/landing_page_mvp.jpg?raw=true"
        },
        {
            name: "sign up",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/sign_up_mvp.jpg?raw=true"
        },
        {
            name: "home page",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/home_mvp.jpg?raw=true"
        },
        {
            name: "order page",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/order_page_mvp.jpg?raw=true"
        },
        {
            name: "payment info",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/payment_info_mvp.jpg?raw=true"
        },
    ],
    version2: [
        "Independant gear order routes: snowboard + lift ticket vs ski + lift ticket",
        "Add functionality to allow user to view order history",
        "Add functionality to select rental + lift ticket date",
        "Add waiver to sign up page",
        "Functionality that allows user to log into previously created account",
        "Buttons to select items rather than having the user type in their order",
        "Add functionality that allows user to only create an account if they are 18+",
        "Refactor code, especially CSS and focus on responsive design on desktop and mobile",
        "Add mountain background to body"
    ],
    reflections: [
        "Create basic functionality of absolute MVP prior to any styling",
        "MVP comes before UX",
        "Simplify and be very specific with naming conventions",
        "Meditation + yoga were a necessity this week"
    ],
    UXprocess: "",
    underContruction: false
}

const Gnarnia = () => {
    return <Project project={gnarniaData} />
}


// Hangman
const hangmanData = {
    name: "Hangman Game",
    homePagePic: "https://github.com/ronniegross/ProjectOne/blob/master/mockups/iteration%202.1.jpg?raw=true",
    goal: "To create a fun, intuitive game using HTML, CSS, and JavaScript",
    description: [
        "Demonstrate your ability to use HTML and CSS to build and style an intuitive web application",
        "Demonstrate your competancy in DOM manipulation using JavaScript",
        "Publish your source code to GitHub with a solid README.md describing the project",
        "Deploy your application to a production environment such as BitBalloon",
        "Present your project in a presentation style format"
    ],
    techUsed: [
        "HTML",
        "CSS",
        "animate.css",
        "Javascript",
        "jQuery",
        "SVG files"
    ],
    deployedAppLink: "",
    gitHubLink: "https://github.com/ronniegross/ProjectOne",
    mockups: [
        {
            name: "winner",
            link: "https://github.com/ronniegross/ProjectOne/blob/master/mockups/iteration%202.2.jpg?raw=true"
        },
        {
            name: "loser",
            link: "https://github.com/ronniegross/ProjectOne/blob/master/mockups/iteration%202.3.jpg?raw=true"
        },
        {
            name: "tutorial",
            link: "https://github.com/ronniegross/ProjectOne/blob/master/mockups/iteration%202.4.jpg?raw=true"
        }
    ],
    version2: [
        "Create better animations for tutorial",
        "Move tutorial button to top right screen (based on user feedback",
        "test out different colored hangman svg for a better user experience"
    ],
    reflections: [
        "Reflection blah",
        "Reflection blah"
    ],
    UXprocess: "",
    underContruction: false

};
const Hangman = () => {
    return <Project project={hangmanData} />
}


// Fromage
const fromageData = {
    name: "",
    homePagePic: "",
    goal: "",
    description: [
    ],
    techUsed: [
    ],
    deployedAppLink: "",
    gitHubLink: "",
    mockups: [
        {
            name: "",
            link: ""
        },
    ],
    version2: [
        "",
        "",
        ""
    ],
    reflections: [
        "",
        ""
    ],
    UXprocess: "",
    underContruction: true
};

const Fromage = () => {
    return <Project project={fromageData} />
}


// Skydive Greene County
const sgcData = {
    name: "",
    homePagePic: "",
    goal: "",
    description: [
    ],
    techUsed: [
    ],
    deployedAppLink: "",
    gitHubLink: "",
    mockups: [
        {
            name: "",
            link: ""
        },
    ],
    version2: [
        "",
        "",
        ""
    ],
    reflections: [
        "",
        ""
    ],
    UXprocess: "",
    underContruction: true
};

const Sgc = () => {
    return <Project project={sgcData} />
}

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
                        <Route exact path="/gnarnia" component={Gnarnia} />
                        <Route exact path="/hangman" component={Hangman} />
                        <Route exact path="/fromage" component={Fromage} />
                        <Route exact path="/SkydiveGreeneCounty" component={Sgc} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
