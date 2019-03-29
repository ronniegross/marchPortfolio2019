import React, { Component } from 'react'
import styled from 'styled-components'
import UnderConstruction from './UnderConstruction';
import { Redirect } from 'react-router-dom';

const ProjectWrapper = styled.div`
    h1 {
        color: #2F2F2F;
    }
    img {
        width: 70%;
    }
`

export default class Project extends Component {
    state = {
        description: [],
        techUsed: [],
        mockups: [],
        version2: [],
        reflections: [],
        underConstruction: false
    }

    componentDidMount = () => {
        this.setState({
            description: this.props.project.description,
            techUsed: this.props.project.techUsed,
            mockups: this.props.project.mockups,
            version2: this.props.project.version2,
            reflections: this.props.project.reflections,
            underConstruction: this.props.project.underConstruction
        })
    }

    render() {
        // i know that i need a ternary statement to see if there is information within various array but where
        // and how
        if (this.state.underConstruction === true) {
            return (<Redirect to="/"/>)
        }
        return (
            <div>
                <ProjectWrapper>
                    <h1>{this.props.project.name}</h1>
                    <img src={this.props.project.homePagePic} alt="Home Page Pic"></img>
                    <h3>Goal:</h3>
                    <p>{this.props.project.goal}</p>
                    <h3>Technologies Used:</h3>
                    {/* {if (this.state.techUsed != "" ?
                                   this.state.techUsed.map(singleTech => {
                                    return (
                                        <div>
                                            <ul>
                                                <li>{singleTech}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                                : null
                    )} */}
                    {this.state.techUsed.map(singleTech => {
                        return (
                            <div>
                                <ul>
                                    <li>{singleTech}</li>
                                </ul>
                            </div>
                        )
                    })}
                    <h3>Description:</h3>
                    {
                        this.state.description.map(singleDescription => {
                            return (
                                <div>
                                    <ul>
                                        <li>{singleDescription}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <h3><a href={this.props.deployedAppLink}>Link </a>To Deployed App</h3>
                    <h3><a href={this.props.deployedAppLink}>Link </a>To Github</h3>
                    <h3>ERD</h3>
                    <img src={this.props.project.ERD} alt="ERD"></img>
                    <h3>Mockups</h3>
                    {
                        this.state.mockups.map(singleMockup => {
                            return (
                                <div key="mockup">
                                    <h4>{singleMockup.name}</h4>
                                    <img src={singleMockup.link} alt="Mockup"></img>
                                </div>
                            )
                        })
                    }
                    <h3>Version 2:</h3>
                    {
                        this.state.version2.map(version2idea => {
                            return (
                                <div>
                                    <ul>
                                        <li>{version2idea}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <h3>Reflections:</h3>
                    {
                        this.state.reflections.map(singleReflection => {
                            return (
                                <div>
                                    <ul>
                                        <li>{singleReflection}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }

                </ProjectWrapper>
            </div>
        )
    }
}
