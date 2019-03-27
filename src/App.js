import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderContainer from './components/Header.js'

const TileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

const Tile = styled.div`
    background-color: #595959;
    width: 40%;
    height: 400px;
    margin: 20px;
    border-radius: 10px;
    @media (max-width: 800px) {
        width: 70%;
        height: 300px;
    }
`

class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <TileContainer>  
                    <Tile>                                                 
                        <img src="" alt=""></img>
                    </Tile>
                    <Tile>
                        <img src="" alt=""></img>
                    </Tile>
                </TileContainer>
                <TileContainer>  
                    <Tile>                                                 
                        <img src="" alt=""></img>
                    </Tile>
                    <Tile>
                        <img src="" alt=""></img>
                    </Tile>
                </TileContainer>
                <TileContainer>  
                    <Tile>                                                 
                        <img src="" alt=""></img>
                    </Tile>
                    <Tile>
                        <img src="" alt=""></img>
                    </Tile>
                </TileContainer>
            </div>
        );
    }
}

export default App;
