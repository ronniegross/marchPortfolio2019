import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.project.name}</h1>
                <p>{this.props.project.description}</p>
                {/* <img href={this.props.project.homePagePic} alt="Home Page Pic"></img> */}
            </div>
        )
    }
}
