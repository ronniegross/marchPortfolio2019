import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Contact from './Contact.js'

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
    @media (max-width: 850px) {
        img {
            width: 350px;
        }
    }
    @media (max-width: 400px) {
        img {
            width: 350px;
        }
    }
    @media (max-width: 375px) {
        img {
            width: 300px;
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
                    <Link to={'/gnarnia'}>
                        <Tile>
                            <img src="https://i.imgur.com/JVoO6Vc.png" alt="Gnarnia"></img>
                        </Tile>
                    </Link>
                    <Link to={'/hangman'}>
                        <Tile>
                            <img src="https://i.imgur.com/T7vIJfb.png" alt="Hangman Game"></img>
                        </Tile>
                    </Link>
                </TileContainer>
                <TileContainer>
                    <Link to={'/fromage'}>
                        <Tile>
                            <img src="https://i.imgur.com/RMgYAv0.png" alt="Fromage"></img>
                        </Tile>
                    </Link>
                    <Link to={'/SkydiveGreeneCounty'}>
                        <Tile>
                            <img src="https://i.imgur.com/YSiWjvV.png" alt="SGC"></img>
                        </Tile>
                    </Link>
                </TileContainer>
                <TileContainer>
                    <Link to={'/atlShelterResource'}>
                        <Tile>
                            <img src="https://i.imgur.com/zUjublq.png" alt="ASR"></img>
                        </Tile>
                    </Link>
                    {/* <Link to={'/'}>
                        <Tile>
                            <img src="#" alt="blank"></img>
                        </Tile>
                    </Link> */}
                </TileContainer>
                <Contact />
            </div>
        )
    }
}



