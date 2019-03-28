import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        margin: 10px 0 3px 0;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: #FF3100;
        font-size: 40px;
    }
    h2 {
        margin: 0px;
        font-family: Arial, Helvetica, sans-serif;
        color: #595959;
        font-size: 25px;
    }
    @media (max-width: 500px) {
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 18px;
        }
    }
`

export default class Header extends Component {
    render() {
        return (
            <div>
                <HeaderContainer>
                    <h1>Ronnie Gross</h1>
                    <h2>Software Developer | UX Designer</h2>
                </HeaderContainer>
            </div>
        )
    }
}
