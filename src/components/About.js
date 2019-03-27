import React, { Component } from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
    padding: 0 40px 0 40px;
    margin: 0;
    display: flex;
    flex-direction: row;
    .headshotContainer {
        width: 30%;
    }
`

export default class About extends Component {
    render() {
        return (
            <div>
                <AboutContainer>
                    <div className="headshotContainer">
                        <img src="https://i.imgur.com/8uBHPES.jpg" alt="headshot"></img>
                    </div>
                    <div className="infoContainer">
                        <p>Ramps snackwave small batch enamel pin waistcoat XOXO thundercats leggings chillwave organic lumbersexual palo santo stumptown mustache brunch. Cliche keytar retro, heirloom banjo tousled pok pok drinking vinegar. Glossier deep v kinfolk pug mustache put a bird on it leggings lomo pinterest chicharrones cornhole fanny pack street art bicycle rights. Pork belly copper mug ethical selvage gastropub VHS viral gluten-free keytar +1 banjo tbh austin normcore next level. Kickstarter banjo meh fam shaman keytar, tote bag flannel activated charcoal yuccie.
                        Copper mug sustainable hella drinking vinegar banh mi sartorial truffaut mlkshk live-edge kinfolk authentic pop-up post-ironic meditation. Ugh celiac bitters roof party, deep v dreamcatcher hammock taiyaki bushwick drinking vinegar succulents. Austin chia pug, wolf hot chicken four loko venmo yuccie. XOXO hell of tattooed vape enamel pin artisan. Health goth brunch messenger bag synth readymade.</p>
                    </div>
                </AboutContainer>
            </div>
        )
    }
}
