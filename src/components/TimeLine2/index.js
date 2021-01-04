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
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    const [touchStart, setTouchStart] = useState();
    const [change, setChange] = useState(); 
    const [clas, setClas] = useState(); 

    const touchStartFunction = (e) => {
        console.log(e.touches[0].clientX)
    }

    const touchMove = (e) => {
        let value = e.touches[0].clientX; 
        setChange(touchStart - value)
    }

    const touchEnd = (e) => {
        if(change > 0){
            setClas('changed')
        }
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
                    <FaArrowAltCircleLeft size={20} color="#fff" className={current === 0 ? 'left-arrow hide' : 'left-arrow'} onClick={prevSlide} />
                    <FaArrowAltCircleRight size={20} color="#fff" className={current === length -1 ? 'right-arrow hide' : 'right-arrow'} onClick={nextSlide} />

                    {SliderData.map((slide, index) => {
                        return (
                            <div key={index} className={index === current ? `slide active` : "slide"} >
                                <Img src={slide.image} />
                                <div className="indicators">
                                    {SliderData.map((b,i) => {
                                        return (
                                            <>
                                                <div key={i} className={index === i ? 'indicators active' : ''} ></div>
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