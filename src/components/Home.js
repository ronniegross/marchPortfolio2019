import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`

const Tile = styled.div`
    a {
        margin: 0;
        padding: 0;
    }
    img {
        margin: 0;
        padding: 20px;
        width: 550px;
    }
    @media (max-width: 1150px) {
        img {
            width: 450px;
        }
    }
    @media (max-width: 1000px) {
        img {
            width: 400px;
        }
    }
    /* @media (max-width: 850px) {
        img {
            width: 350px;
        }
    }
    @media (max-width: 750px) {
        img {
            width: 300px;
        }
    } */
`

export default class Home extends Component {
    render() {
        return (
            <div>
                <TileContainer>
                    <Link to={'/project1'}>
                        <Tile>
                            <img src="https://i.imgur.com/JVoO6Vc.png" alt="Gnarnia"></img>
                        </Tile>
                    </Link>
                    <Link to={'/project2'}>
                        <Tile>
                            <img src="https://i.imgur.com/T7vIJfb.png" alt="Hangman Game"></img>
                        </Tile>
                    </Link>
                </TileContainer>
            </div>
        )
    }
}