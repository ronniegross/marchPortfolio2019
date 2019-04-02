import React, { Component } from 'react'
import styled from 'styled-components'
import Contact from './Contact.js'

const AboutContainer = styled.div`
    padding: 0 40px 0 40px;
    margin: 0;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    img {
        width: 300px;
        display: block; 
        margin: 0 auto;
    }
    .headshotContainer {
        margin-right: 25px;
        /* width: 300px; */
    }
    p {
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
    @media (max-width: 750px) {
        flex-direction: column;
        align-content: center;
        p {
            margin: 20px 0 0 0;
        }
    }
`

export default class About extends Component {
    render() {
        return (
            <div>
                <AboutContainer>
                    <div className="headshotContainer">
                        <img src="https://i.imgur.com/8uBHPES.jpg" alt="headshot"></img>
                    </div>
                    <div className="infoContainer">
                    <p>Hey there! Thanks for checking out my portfolio. 
                                My name is Ronnie, and I’m glad you stopped by!<br/><br/>
                            I spent years at the Georgia Institute of Technology studying 
                            tangible design, and made the jump to User Experience Design 
                            while studying at the Eindhoven University of Technology in Eindhoven, 
                            Netherlands. I graduated from Georgia Tech in December of 2017 with a 
                            degree in Industrial Design, and decided to pursue a career in UX 
                            Design in January of 2018.<br/><br/>
                            I stepped down from my role in July of 2018 to focus on an illness 
                                in my immediate family. The silver lining of that situation was 
                                that I had free time, which I decided to fill by teaching myself 
                                to code. I fell in love with programming during those months, and 
                                decided to attend General Assembly’s Software Development Immersive 
                                Bootcamp in January of 2019 to learn how to build full stack applications.<br/><br/>
                            While I absolutely subscribe to the belief of being a creative 
                                problem solver, my true passion lies in diving deep into the 
                                problem space to guarantee the solution I’m creating is solving 
                                the correct problem. Research, analysis, iterative design, and 
                                testing were  core pillars of my design career, and I believe my 
                                experience in these areas makes me a unique developer. Not only 
                                can I create beautiful solutions, but I understand the “why” 
                                behind what I’m creating.<br/><br/>
                            I hope you’ve enjoyed checking out my featured applications and projects! 
                                Please feel free to contact if you have any questions, 
                                comments, of if you’d like to collaborate.</p>
                    </div>
                </AboutContainer>
                <Contact />
            </div>
        )
    }
}
