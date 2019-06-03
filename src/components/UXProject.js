import React, { Component } from 'react'
import styled from 'styled-components'

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
            <ProjectWrapper>

            </ProjectWrapper>
        )
    }
}
