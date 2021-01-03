import React from 'react'; 

import {
    DivTimeLine, Container, 
} from './style.js'; 

import {SliderData} from '../TimeLine2/sliderData.js'; 

import Stories from '../Stories'; 
import TimeLine2 from '../TimeLine2';

const TimeLine = () => {
    return (
        <DivTimeLine>
            <Container>
                <Stories />
                <TimeLine2 slides={SliderData}/>
            </Container>
        </DivTimeLine>
    )
}

export default TimeLine; 