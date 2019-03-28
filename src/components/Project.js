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
    render() {
        return (
            <div>
                <ProjectWrapper>
                    <h1>{this.props.project.name}</h1>
                    <img src={this.props.project.homePagePic} alt="Home Page Pic"></img>
                    <p>{this.props.project.description}</p>
                </ProjectWrapper>
            </div>
        )
    }
}
