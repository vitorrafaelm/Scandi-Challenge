import React, { useState } from 'react';

import {
    DivPosts, ArticleTimeLine, Header, Title, TitleDivImage,
    ImageName, Body, Img
} from './style.js';

import { FaEllipsisH, FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import foto from '../../Assets/foto.jpg';
import './style.scss';
import { SliderData } from './sliderData';

let style = {
    marginRight: '1rem'
}

const TimeLine2 = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log("ok")
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log("ok")
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    var indicators = null;
    function createIndicators() {
        return SliderData.map((index) => {
            return (
                <>
                    <div className={index === current ? 'indicators active' : ''} ></div>
                </>
            )

        })
    }

    indicators = createIndicators();
    console.log(indicators)
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
                    <FaArrowAltCircleLeft size={20} color="#fff" className="left-arrow" onClick={prevSlide} />
                    <FaArrowAltCircleRight size={20} color="#fff" className="right-arrow" onClick={nextSlide} />

                    {SliderData.map((slide, index) => {
                        return (
                            <div key={index} className={index === current ? "slide active" : "slide"}>
                                <Img className="image" src={slide.image} alt="travel image" />
                                <div className="indicators">
                                    {SliderData.map((b,i) => {
                                         console.log(i);
                                        return (
                                            <>
                                                <div className={index === i ? 'indicators active' : ''} ></div>
                                            </>
                                        )
                                        
                                    })}
                                </div>
                            </div>
                        )
                    })}


                </Body>
            </ArticleTimeLine>
        </DivPosts>
    )
}

export default TimeLine2; 