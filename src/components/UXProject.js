import React, { Component } from 'react'
import styled from 'styled-components'
import Contact from './Contact.js'

const ProjectWrapper = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-content: center; */
    /* align-items: center; */
    h1 {
        color: #2F2F2F;
        font-family: 'Libre Baskerville', serif;
        margin-bottom: 15px;
    }
    img {
        width: 70%;
        border: solid darkgrey 1px;
    }
    h3 {
        font-family: 'Libre Baskerville', serif;
        margin-bottom: 20px;
    }
    p {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
    }
    h4 {
        font-family: 'Libre Baskerville', serif;
        margin-bottom: 15px;
    }
    ul {
        margin: 0;
    }
    li {
        padding: 3px;
        font-family: 'Source Sans Pro', sans-serif;
    }
    h3.listTitle {
        margin-bottom: 10px;
    }
    footer {
        height: 40px;
    }
    .mockupTitle {
        margin-bottom: 0px;
    }
    .singleMockupName {
        text-decoration: underline;
    }
    /* .githubLink {
        margin-top: 5px;
    } */
    h3.deployedLink {
        margin-top: 30px;
    }
    a {
        text-decoration: none;
        color: #FF3100;
    }
    .goalTitle {
        margin-bottom: 15px;
    }
    h3.mobileResponsiveTitle {
        margin-top: 30px;
    }
    @media (max-width: 1100px) {
        img {
            width: 90%;
        }
    }
    @media (max-width: 500px) {
        img {
            width: 100%;
        }
        margin-left: 0px;
        h3.deployedLink {
            margin-top: 15px;
        }
        h3.githubLink {
            margin-bottom: 7px;
        }
        h1 {
            font-size: 20px;
            margin-left: 10px;
            /* text-align: center; */
        }
        h3 {
            margin: 10px 10px 0 10px;
            font-size: 14px;
        }
        p {
            /* margin-left: 10px; */
            margin: 0 10px 0 10px;
            font-size: 16px;
        }
        h4 {
            margin-left: 10px;
            font-size: 12px;
        }
        li {
            font-size: 14px;
            /* margin: 0; */
            margin-right: 5px;
        }
        h3.mobileResponsiveTitle {
        margin-top: 15px;
        margin-bottom: 10px;
        }
    }
`

export default class UXProject extends Component {
    render() {
        return (
            <div>
                <ProjectWrapper>
                    <h1>{this.props.project.name}</h1>
                    <img src={this.props.project.homePagePic} alt="Home Page Pic"></img>
                    <h3 className="goalTitle">Goal:</h3>
                    <p>{this.props.project.goal}</p>
                    {
                        this.props.project.prototype ?
                            <h3 className="githubLink"><a href={this.props.project.prototype}>Link </a>to Prototype</h3>
                            : null
                    }
                    <h3 className="listTitle">Technologies Used:</h3>
                    <div>
                        <ul>
                            {this.props.project.techUsed.map(singleTech => {
                                return (

                                    <li>{singleTech}</li>

                                )
                            })}
                        </ul>
                    </div>
                    {
                        this.props.project.UXprocess ?
                            <h3 className="listTitle">UX Process:</h3>
                            : null
                    }
                    {
                        this.props.project.UXprocess ?
                            <ul>
                                {
                                    this.props.project.UXprocess.map(singleProcess => {
                                        return (
                                            <li>{singleProcess}</li>
                                        )
                                    })
                                }
                            </ul>
                            : null
                    }
                    <h3 className="mockupTitle">Mockups</h3>
                    {
                        this.props.project.mockups.map(singleMockup => {
                            return (
                                <div key="mockup">
                                    <h4 className="singleMockupName">{singleMockup.name}</h4>
                                    <img src={singleMockup.link} alt="Mockup"></img>
                                </div>
                            )
                        })
                    }
                    <div>
                        {
                            this.props.project.version2 ?
                                <h3 className="listTitle">Version 2:</h3>
                                : null
                        }
                        {
                            this.props.project.version2 ?
                                <ul>
                                    {
                                        this.props.project.version2.map(version2idea => {
                                            return (
                                                <li>{version2idea}</li>
                                            )
                                        })
                                    }
                                </ul>
                                : null
                        }
                    </div>
                    <div>
                        {this.props.project.reflections.length > 0 ? <h3 className="listTitle">Reflections:</h3> : null}
                        <ul>
                            {this.props.project.reflections.length > 0 ?
                                this.props.project.reflections.map(singleReflection => {
                                    return (
                                        <li>{singleReflection}</li>
                                    )
                                })
                                : null}
                        </ul>
                    </div>
                    <footer></footer>
                </ProjectWrapper>
                <Contact />
            </div>
        )
    }
}
