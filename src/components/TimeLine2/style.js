import styled from 'styled-components'; 
 
export const DivPosts = styled.div`
    display: flex; 
    align-items: center; 
    max-width: 600px;
    padding: 16px 0px;

    border: 1px solid #dbdbdb;
    border-radius: 3px;
    background-color: #fff;
    margin-top: 24px; 
`; 

export const ArticleTimeLine = styled.article`
    display: flex; 
    flex-direction: column;
    flex-shrink: 0; 
    width: 100%;
    background-color: #fff;
`; 

export const Header = styled.header`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
`; 

export const Title = styled.div`
    display: flex; 
    justify-content: space-around; 
    align-items: center;
    padding: 0px 22px; 
    cursor: pointer;
`; 

export const TitleDivImage = styled.img`
    width: 45px; 
    height: 45px; 
    border: none; 
    border-radius: 3rem; 
`; 

export const ImageName = styled.span`
    font-size: 16px; 
    font-weight: 300; 
    margin-left: 1rem;
`; 

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;

    position: relative;
`; 

export const Img = styled.img`
    display: flex; 
    position: relative;
    width: 598px;
    height: 40rem;
    border: none; 
    border: 1px solid #dbdbdb;
    margin-top: 0.5rem;

    @media(max-width: 568px) {
        width: 100vw;
    }
`; 



