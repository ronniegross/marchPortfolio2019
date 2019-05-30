import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderContainer from './components/Header.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home.js'
import About from './components/About.js'
import Resume from './components/Resume.js'
import Contact from './components/Contact.js'
import Project from './components/Project'
import UnderConstruction from './components/UnderConstruction'


// Gnarnia
const gnarniaData = {
    name: "Gnarnia: Lift Ticket and Gear Rental App",
    homePagePic: "https://i.imgur.com/hYHtF7s.jpg",
    goal: "To create an application that will allow users to reserve snowboarding gear, ski gear, and a lift ticket in order to achieve radical gnar",
    description: [
        "Has at least 3 models",
        "Has full CRUD on at least one model",
        "Ability to add / delete on any remaining models",
        "Use the Mongoose library to write Mongo queries",
        "Has high quality code",
        "Efficient code- if you have your MVP, refactor",
        "DRY (Don't Repeat Yourself) code",
        "Be deployed on Heroku"
    ],
    mobileResponsive: 'No',
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
    // prototypeLink: "https://invis.io/MFS5M13ZAEY",

    ERD: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/ERD_Final_Gnarnia.jpg?raw=true",
    mockups: [
        {
            name: "Log In",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/landing_page_mvp.jpg?raw=true"
        },
        {
            name: "Sign Up",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/sign_up_mvp.jpg?raw=true"
        },
        {
            name: "Home",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/home_mvp.jpg?raw=true"
        },
        {
            name: "Order",
            link: "https://github.com/ronniegross/projectTwo/blob/master/gnarnia%20mockups%20readme/order_page_mvp.jpg?raw=true"
        },
        {
            name: "Payment Info",
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
        "Deploy your application to a production environment such as Netlify",
        "Present your project in a presentation style format"
    ],
    mobileResponsive: 'No',
    techUsed: [
        "HTML",
        "CSS",
        "animate.css",
        "Javascript",
        "jQuery",
        "SVG files"
    ],
    deployedAppLink: "https://vigilant-booth-9dc719.netlify.com/",
    gitHubLink: "https://github.com/ronniegross/ProjectOne",
    mockups: [
        {
            name: "Winner",
            link: "https://github.com/ronniegross/ProjectOne/blob/master/mockups/iteration%202.2.jpg?raw=true"
        },
        {
            name: "Loser",
            link: "https://github.com/ronniegross/ProjectOne/blob/master/mockups/iteration%202.3.jpg?raw=true"
        },
        {
            name: "Tutorial",
            link: "https://github.com/ronniegross/ProjectOne/blob/master/mockups/iteration%202.4.jpg?raw=true"
        }
    ],
    version2: [
        "Create better animations for tutorial",
        "Move tutorial button to top right screen (based on user feedback",
        "test out different colored hangman svg for a better user experience"
    ],
    reflections: [
        // "Reflection blah",
        // "Reflection blah"
    ],
    UXprocess: "",
    underContruction: false

};
const Hangman = () => {
    return <Project project={hangmanData} />
}


// Fromage
const fromageData = {
    name: "Fromage a Trois",
    homePagePic: "https://i.imgur.com/wcNvnzI.png",
    goal: "To create a clean, responsive application that allows a user to log their favorite cheeses. Note: these aren't my most beautiful mockups, but I wanted to challenge myself to use a design framework which would do the heavy design lifting for me",
    description: [
        "Use React as a front-end library", 
        "Has at least 2 models", 
        "Has full CRUD on at least one model", 
        "Be able to Add/Delete on any remaining models",
        "Use the Mongoose library to write Mongo queries",
        "Be deployed on Heroku"
    ],
    mobileResponsive: 'Yes',
    techUsed: [
        "React",
        "Express",
        "MongoDB",
        "Node",
        "Materalize CSS",
        "Styled Components"
    ],
    deployedAppLink: "https://fromage.herokuapp.com/",
    gitHubLink: "https://github.com/ronniegross/projectThree",
    ERD: "https://i.imgur.com/MNhZ38Y.jpg",
    mockups: [
        {
            name: "Sign Up",
            link: "https://i.imgur.com/D0Q0576.jpg"
        },
        {
            name: "Cheese List",
            link: "https://i.imgur.com/zOTW45g.jpg"
        },
        {
            name: "Single Cheese",
            link: "https://i.imgur.com/xpkspCW.jpg"
        },
        {
            name: "Add Cheese",
            link: "https://i.imgur.com/KeihsLM.jpg"
        },
        {
            name: "User Info",
            link: "https://i.imgur.com/5yNVF6o.jpg"
        },
    ],
    version2: [
        "I would create high fidelity mockups and use Styled-Components to code those designs",
        "I would add custom icons to the radio buttons",
        "Add functionality that would display a default cheese picture if the user did not imput a cheese image link"
    ],
    reflections: [
        "I'm eecstatic that I took this opportunity to try out Materialize CSS",
        "I feel like I learned a lot about project planning from my Gnarnia project, and managed my time much better with Fromage than I did with any of my other projects"
    ],
    UXprocess: "",
    underConstruction: false
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
    mobileResponsive: '',
    deployedAppLink: "",
    gitHubLink: "",
    prototypeLink: "",
    ERD: "",
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
    underConstruction: true
};


const Sgc = () => {
    return <Project project={sgcData} />
}

// atl Shelter Resource
const asrData = {
    name: "Atlanta Shelter Resource",
    homePagePic: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Home_Mockup.jpg?raw=true",
    goal: "The goal of this project was to create an easy to use application to assist Atlanta's homeless community in finding shelter and community. Mobile responsiveness was the top priority as most homeless folks have access to a smart phone, which would allow them to easily utilize a web application.",
    description: [
        "Use React as a front-end library",
        "Have at least 3 models",
        "Have full CRUD on at least one of your models",
        "Be able to Add/Delete on any remaining models",
        "Include a 3rd Party API",
        "You must explicitly write the 3rd Party API calls in your app. Installing an npm package that includes API calls will not meet the requirements",
        "Have high quality code",
        "Be deployed on Heroku",
    ],
    techUsed: [
        "React",
        "Django",
        "Axios",
        "Styled-Components",
        "Sketch",
    ],
    mobileResponsive: 'Yes',
    deployedAppLink: "https://atlanta-shelter-resource.herokuapp.com/",
    gitHubLink: "https://github.com/ronniegross/projectFour/tree/master/ASR_Mockups_StyleGuide",
    ERD: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_MVP.jpg?raw=true",
    mockups: [
        {
            name: "Resource List",
            link: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Home.jpg?raw=true"
        },
        {
            name: "Single Resource",
            link: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Single_Resource_MVP.jpg?raw=true"
        },
        {
            name: "Map",
            link: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Maps.jpg?raw=true"
        },
        {
            name: "Links",
            link: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Links.jpg?raw=true"
        },
        {
            name: "Number Index",
            link: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Number_Index.jpg?raw=true"
        },
        {
            name: "User Account",
            link: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Account_Info.jpg?raw=true"
        },
        {
            name: "Style Guide",
            link: "https://github.com/ronniegross/projectFour/blob/master/ASR_Mockups_StyleGuide/ASR_Style_Guide.jpg?raw=true"
        }
    ],
    version2: [
        "Add filtering resources by age, gender, family status, and distance",
        "To resources add: intake protocols, dates, times, services offered: dental, health and laundry, room type, high quality pictures",
        "Create user authentication and authorization",
        "Add Google Maps functionality to individual shelters in an easy to use, mobile responsive format"
    ],
    reflections: [
        "I'm really proud of the function I created to alphabetically sort the resources by their resource_name",
        "This has been my passion project, and it was inspired by research I did during my senior year at Georgia Tech. I am planning on continuing to develop and refine this app after this bootcamp ends"
    ],
    UXprocess: "",
    underConstruction: false
};

const Asr = () => {
    return <Project project={asrData} />
}

// bee resourceful

const beeResourcefulData = {
    name: "",
    homePagePic: "",
    goal: "",
    description: [
    ],
    techUsed: [
    ],
    mobileResponsive: '',
    deployedAppLink: "",
    gitHubLink: "",
    ERD: "",
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
    underConstruction: true
};

const Beeresourceful = () => {
    return <Project project={beeResourcefulData} />
}


// blank template
const blankData = {
    name: "",
    homePagePic: "",
    goal: "",
    description: [
    ],
    techUsed: [
    ],
    mobileResponsive: '',
    deployedAppLink: "",
    gitHubLink: "",
    ERD: "",
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
    underConstruction: true
};

const blank = () => {
    return <Project project={blankData} />
}

class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
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
                        <Route exact path="/atlShelterResource" component={Asr} />
                        <Route exact path="/BeeResourceful" component={Beeresourceful} />
                        <Route exact path="/blankData" component={blank} />
                        <Route exact path="/underconstruction" component={UnderConstruction} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
