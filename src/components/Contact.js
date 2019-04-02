import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* .imgContainer {
        width: 50px;
    } */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 150px;
    img {
        width: 50px;
        margin: 0 60px 0 60px;
    }
    @media (max-width: 750px) {
        img {
            margin: 0 20px 0 20px;
        }
    }
`

export default class Contact extends Component {

    render() {
        return (
            <Wrapper>
                    <div className="imgContainer">
                        <a href="https://www.instagram.com/grossgui.io/"><img src="https://i.imgur.com/jgVdAn9.png" alt="instagramIcon" /></a>
                    </div>
                    <div className="imgContainer">
                        <a href="https://www.linkedin.com/in/ronniegross"><img src="https://i.imgur.com/ewtIvba.png" alt="linkedinIcon" /></a>
                    </div>
                    <div className="imgContainer">
                        <a href="https://github.com/ronniegross"><img src="https://i.imgur.com/V8gj45m.png" alt="githubIcon" /></a>
                    </div>
                    <div className="imgContainer">
                        <a href="mailto:ronnie@grossgui.io?Subject=Hello There!" target="_top"><img src="https://i.imgur.com/HdMn8k2.png" alt="mailIcon" /></a>
                    </div>
            </Wrapper>
        )
    }
}


// sendEmail(name, email, message) {

//     fetch('/send', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//             message: message
//         })
//     })
//         .then((res) => res.json())
//         .then((res) => {
//             console.log('here is the response: ', res);
//         })
//         .catch((err) => {
//             console.error('here is the error: ', err);
//         })
// }

