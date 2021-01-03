import styled from 'styled-components'; 

export const DivStories = styled.div`
    display: flex; 
    align-items: center; 

    max-width: 600px;
    padding: 16px 0px;

    border: 1px solid #dbdbdb;
    border-radius: 3px;
`; 

export const DivStoriesIn = styled.div`
    display: flex; 
    align-items: center;
    height: 84px;
    outline: 0;
    overflow-y: hidden;
    background-color: #fff;
`; 

export const DivStoriesIn2 = styled.div`
    height: 100%; 
    width: 100%; 
`; 

export const DivStoriesIn2Presentation = styled.div`
    overflow-x: auto; 
    overflow-y: hidden;  
`; 

export const DivStoriesIn2Fisnish = styled.div`
    display: flex; 
    height: 100%;  
`; 


export const UlStories = styled.ul`
    display: flex; 
    list-style: none; 
`; 

export const LiStories = styled.li`
    transform: translateX(10px);
`; 

export const DivHoldsImg = styled.div`
    height: 122px;
    padding: 0 4px; 
    top: 2px; 
    width: 80px; 
`; 

export const ButtonHoldImg = styled.button`
    display: flex; 
    align-items: center; 
    align-self: center;
    border: 0;
    
    flex-direction: column;
    padding-bottom: 0;
    padding-top: 0;
    text-align: center;
    width: 64px;
    background-color: #fff;
    border-radius: 3rem;
    
`; 

export const ImgStories = styled.img`
    width: 56px; 
    height: 56px;
    border-radius: 3rem;
    border: 4px solid rgba(228,64,95,1);
`; 

export const ImgStoriesName = styled.span`
    font-size: 16px; 
    font-weight: 300;

    padding-top: 10 px;
`; 
