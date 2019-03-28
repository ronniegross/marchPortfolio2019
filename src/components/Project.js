import React, { Component } from 'react'
import styled from 'styled-components'

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
        mockups: []
    }

    componentDidMount = () => {
        this.setState({
                description: this.props.project.description,
                mockups: this.props.project.mockups
            })
        }

    render() {
        console.log(this.state.mockups)
        return (
            <div>
                <ProjectWrapper>
                    <h1>{this.props.project.name}</h1>
                    <img src={this.props.project.homePagePic} alt="Home Page Pic"></img>
                    <h3>Goal:</h3>
                    <p>{this.props.project.goal}</p>
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
                    <h3><a href="">Link </a>To Deployed App</h3>
                    <h4>ERD</h4>
                    <img src={this.props.project.ERD} alt="ERD"></img>
                    <h3>Mockups</h3>
                    {
                        this.state.mockups.map(singleMockup => {
                            return(
                                <div key="mockup">
                                    <h4>Mockup {singleMockup.number}</h4>
                                    <img src={singleMockup.link} alt="Mockup"></img>
                                </div>
                            )
                        })
                    }
                    <img src="" alt="Mockup"></img>
                </ProjectWrapper>
            </div>
        )
    }
}
