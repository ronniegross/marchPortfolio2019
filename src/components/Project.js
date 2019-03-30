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

    render() {
        // i know that i need a ternary statement to see if there is information within various array but where
        // and how
        console.log(this.props)
        if (this.props.project.underConstruction === true) {
            return (<Redirect to={`/underconstruction`} />)
        }
        return (
            <div>
                <ProjectWrapper>
                    <h1>{this.props.project.name}</h1>
                    <img src={this.props.project.homePagePic} alt="Home Page Pic"></img>
                    <h3>Goal:</h3>
                    <p>{this.props.project.goal}</p>
                    <h3>Technologies Used:</h3>
                    <div>
                        <ul>
                            {this.props.project.techUsed.map(singleTech => {
                                return (

                                    <li>{singleTech}</li>

                                )
                            })}
                        </ul>
                    </div>
                    <h3>Description:</h3>
                    <ul>
                        {
                            this.props.project.description.map(singleDescription => {
                                return (
                                    <li>{singleDescription}</li>
                                )
                            })
                        }
                    </ul>
                    <h3><a href={this.props.deployedAppLink}>Link </a>To Deployed App</h3>
                    <h3><a href={this.props.deployedAppLink}>Link </a>To Github</h3>
                    {

                    }
                    {this.props.project.erd ? <h3>ERD</h3> : null}
                    {this.props.project.erd ? <img src={this.props.project.ERD} alt="ERD"></img> : null}
                    <h3>Mockups</h3>
                    {
                        this.props.project.mockups.map(singleMockup => {
                            return (
                                <div key="mockup">
                                    <h4>{singleMockup.name}</h4>
                                    <img src={singleMockup.link} alt="Mockup"></img>
                                </div>
                            )
                        })
                    }
                    <div>
                        <ul>
                            <h3>Version 2:</h3>
                            {
                                this.props.project.version2.map(version2idea => {
                                    return (
                                        <li>{version2idea}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {this.props.project.reflections.length > 0 ? <h3>Reflections:</h3> : null}
                            {this.props.project.reflections.length > 0 ?
                                this.props.project.reflections.map(singleReflection => {
                                    return (
                                        <li>{singleReflection}</li>
                                    )
                                })
                                : null}
                        </ul>
                    </div>
                </ProjectWrapper>
            </div>
        )
    }
}
