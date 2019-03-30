import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-content: center; */
    align-items: center;
    /* justify-content: center; */
    h1 {
        color: #e01065;
        text-shadow: 2px 2px #B8F2FF;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0 20px 0 20px;
        text-align: center;
    }
    img {
        width: 70%;
        align-self: center;
        margin: 0 auto;
    }
    .axBox {
        display: flex;
        justify-content: center;
    }
`

export default class UnderConstruction extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <h1>This page is currently under construction. Check back later!</h1>
                    <div className="axBox">
                        <img src="https://i.imgur.com/i12HUmL.png" alt="axotle" />
                    </div>
                </Wrapper>
            </div>
        )
    }
}
