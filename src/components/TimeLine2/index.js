import React, { useState } from 'react';

import {
    DivPosts, ArticleTimeLine, Header, Title, TitleDivImage,
    ImageName, Body, Img
} from './style.js';

import { FaEllipsisH, FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import foto from '../../Assets/foto.jpg';
import './style.scss';
import { ImagesToTheSlide } from './sliderImages';

let style = {
    marginRight: '1rem'
}

const TimeLine2 = ({ slides }) => {
    const [acutalValue, setAcutalValue] = useState(0);
    const length = ImagesToTheSlide.length;
    
    const nextSlide = () => {
        setAcutalValue(acutalValue === length - 1 ? 0 : acutalValue + 1)
    }

    const previousSlide = () => {
        setAcutalValue(acutalValue === 0 ? length - 1 : acutalValue - 1)
    }

    if (!Array.isArray(ImagesToTheSlide) || ImagesToTheSlide.length <= 0) {
        return null;
    }

    return (
        <DivPosts>
            <ArticleTimeLine>
                <Header>
                    <Title>
                        <TitleDivImage src={foto} />
                        <ImageName>Ana Júlia</ImageName>
                    </Title>
                    <FaEllipsisH style={style} size={20} />
                </Header>
                <Body>
                    <FaArrowAltCircleLeft size={20} color="#fff" className={acutalValue === 0 ? 'left-arrow hide' : 'left-arrow'} onClick={previousSlide} />
                    <FaArrowAltCircleRight size={20} color="#fff" className={acutalValue === length -1 ? 'right-arrow hide' : 'right-arrow'} onClick={nextSlide} />

                    {ImagesToTheSlide.map((slide, index) => {
                        return (
                            <ul key={index} className={index === acutalValue ? `slide active` : "slide"} >
                                <li>
                                    <Img src={slide.image} />
                                    <div className="indicators">
                                        {ImagesToTheSlide.map((b,i) => {
                                            return (
                                                <>
                                                    <div key={i.toString()} className={index === i ? 'indicators active' : ''} ></div>
                                                </>
                                            )
                                            
                                        })}
                                    </div>
                                </li>
                            </ul>
                        )
                    })}
                </Body>
            </ArticleTimeLine>
        </DivPosts>
    )
}

export default TimeLine2; 