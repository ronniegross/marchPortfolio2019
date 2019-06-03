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
import UXProject from './components/UXProject.js'


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
        "I'm ecstatic that I took this opportunity to try out Materialize CSS",
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
    name: "Skydive Greene County",
    homePagePic: "https://github.com/ronniegross/sgc-redesign/blob/master/SGC_Mockups_5.30/Home.jpg?raw=true",
    goal: "To redesign and develop an intuitive, clean, and XTREME website",
    techUsed: [
        "React",
        "styled-components",
        "Sketch",
    ],
    mobileResponsive: 'Yes',
    deployedAppLink: "https://determined-lamarr-71e109.netlify.com/#/",
    gitHubLink: "https://github.com/ronniegross/sgc-redesign",
    mockups: [
        {
            name: "Home",
            link: "https://github.com/ronniegross/sgc-redesign/blob/master/SGC_Mockups_5.30/Home.jpg?raw=true"
        },
        {
            name: "First Time Jumpers",
            link: "https://github.com/ronniegross/sgc-redesign/blob/master/SGC_Mockups_5.30/First%20Time%20Jumpers.jpg?raw=true"
        },
        {
            name: "Experienced Jumpers",
            link: "https://github.com/ronniegross/sgc-redesign/blob/master/SGC_Mockups_5.30/Experienced%20Jumpers.jpg?raw=true"
        },
        {
            name: "Pricing",
            link: "https://github.com/ronniegross/sgc-redesign/blob/master/SGC_Mockups_5.30/Pricing.jpg?raw=true"
        },
        {
            name: "FAQs",
            link: "https://github.com/ronniegross/sgc-redesign/blob/master/SGC_Mockups_5.30/FAQ.jpg?raw=true"
        },
    ],
    reflections: [
        "Creating a real world website was an absolute blast",
        "Because I did both the design and the development, I found the biggest challenge of this freelance project was determining what the client actually wanted when she asked for something",
        "For example, she specifically asked for the view more / view less modals to be text aligned in the center, but she actually wanted the whole modal to be easier to read",
        "After determining what she was actually asking for, I added greater margin between each title and information tag and we were both satisifed with the end result",
        "One of my bigger developer challenges came from the FAQ page - I created an FAQ modal component which would link to the the FAQ page, and actually scrolled to the selected question between components using a node module called react-scroll",
        "I also created the mobile nav bar from scratch, and I am extremely satisfied with the result",
        "The site is more or less finished, I'm just waiting on a history write up from the owner, staff headshots, and various skydiving pictures before deploying to Netlify and linking their domain name"
    ],
    UXprocess: "",
    underConstruction: false
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
        "I'm really proud of the function I created to alphabetically sort the resources by their resource name",
        "This has been my passion project, and it was inspired by research I did during my senior year at Georgia Tech",
        "I am planning on continuing to develop and refine this app after this bootcamp ends: see Bee Resourceful on the Projects page"
    ],
    UXprocess: "",
    underConstruction: false
};

const Asr = () => {
    return <Project project={asrData} />
}

// bee resourceful

const beeResourcefulData = {
    name: "BEE Resourceful",
    homePagePic: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Home.png?raw=true",
    goal: "To create a welcoming, easy to use application which would allow users to easily find social resources in their city.",
    UXprocess: [
        "I first met Kyendal at a meet and hire event for recent grads of General Assembly's Web Development Immersive Bootcamp. She gave me a brief overview of her company, BEE Resourceful, and how it closely aligned with my final project at General Assembly, the Atlanta Shelter Resource. We exchanged contact info and arranged a time for me to meet with her business partner, Kharyne, and to learn more about their application.",
        "Upon meeting with BEE Resourceful for a second time, they explained that they were applying to The Farm Atlanta Accelerator, and needed a working prototype to submit with their application.",
        "At this stage, they were still determining the scope of their application and we set up a later appointment to discuss the full business requirements of their application, and the corresponding M.V.P. prototype that they would need to submit with their application in the coming weeks.",
        "Once they determined their final business requirements, we had another meeting and discussed the required features of the prototype that I would be creating for them. I got to work once everyone was satisifed with the prototype requirements, the project rate, and the estimated time to complete the project (roughly 16 hours).",
        "Per our contract, I first created what I call 'shell mockups', which are very basic grayscale mockups that only include the necessary features and information included on the page. I also created very basic graphics and a color scheme based on BEE Resourceful's logo, and the preferences of the owners. I then had a meeting with BEE Resourceful to discuss the shell mockups and to finalize the color palette.",
        "After receiving approval of the shell mockups, I dove into the process of creating the prototype. I first started with a non-logged in view of the resource page, and an individual resource page after searching and selecting a tile.",
        "Per the business requirements, the user would need to be logged into the application in order to submit a resource, so I quickly realized that there would need to be an entirely new set of screens where the user was logged into the application. I then made a login page, a sign up page, a user account page, and versions of the mockups where the user is logged in.",
        "At this point I started creating the prototype using the Craft plugin for Sketch, created by InVision. A chunk of this time was spent trying to break my app, and double checking that every button was linked to the proper screen.",
        "I did some informal user testing with friends to see if there was any major pain points, and to make sure everything was linked properly.",
        "When I was satisfied with the end result, I sent the prototype link to BEE Resourceful. They asked for some text areas to be reworded, and to create functionality for each tile on the resource page to link to another screen explaining that resources were not yet available for that section.",
        "Upon completing these corrections, the project was finished."
    ],
    techUsed: [
        "Sketch",
        "InVision"
    ],
    prototype: "https://invis.io/XESB0XKCBQ8#/366498253_Home",
    mockups: [
        {
            name: "Shell Mockup Home",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Shell_Mockups_JPEG/View_Resources_Basic.jpg?raw=true"
        },
        {
            name: "Shell Mockup Search",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Shell_Mockups_JPEG/Show_All_Resource_In_Category_Search_Basic.jpg?raw=true"
        },
        {
            name: "Shell Mockup Search Extended",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Shell_Mockups_JPEG/View_Single_Resource_Basic.jpg?raw=true"
        },
        {
            name: "Shell Mockup Tile Search",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Shell_Mockups_JPEG/Show_All_Resource_In_Category_Basic.jpg?raw=true"
        },
        {
            name: "Shell Mockup Add A Resource",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Shell_Mockups_JPEG/Add_Resources_Basic.jpg?raw=true"
        },
        {
            name: "Prototype Home",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Home.png?raw=true"
        },
        {
            name: "Prototype Tile Search",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Food_Tile_Results_Expanded.png?raw=true"
        },
        {
            name: "Prototype Tile Search Extended",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Food_Tile_Results_Expanded%20(1).png?raw=true"
        },
        {
            name: "Prototype Tile Search No Results",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Financial_Assistance_Tile.png?raw=true"
        },
        {
            name: "Prototype Login",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Log_In_Submit_To_Atlanta.jpg?raw=true"
        },
        {
            name: "Prototype Signup",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Sign_Up_Gender.jpg?raw=true"
        },
        {
            name: "Prototype Submit a Resource",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Submit_A_Resource.png?raw=true"
        },
        {
            name: "Prototype Post Submit Screen",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/Submitted_Resource_Screen.png?raw=true"
        },
        {
            name: "Prototype User Account",
            link: "https://github.com/ronniegross/BEE_Resourceful/blob/master/BEE_Resourceful_Final_Mockups_JPEG/User_Account.png?raw=true"
        },
    ],
    reflections: [
        "I'm very grateful for the opportunity to continue working on an application that has a direct impact on my community.",
        "This was my first freelance UX project and my first UX project since starting General Assembly's Web Development Immersive Bootcamp, and I had some moments of second guessing myself during the graphic design and color decisions that I had to make throughout this process. I documented my UX process at the start of this page, and trusting that process helped give me confidence to dive head first into this project."
    ],
    underConstruction: false
};

const Beeresourceful = () => {
    return <UXProject project={beeResourcefulData} />
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
