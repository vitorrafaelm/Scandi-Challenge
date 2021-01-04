import styled from 'styled-components'; 

export const Nav = styled.div`
    display: flex; 
    justify-content: center; 
    width: 100%; 
    height: 65px;     

    background-color: white;
    border-bottom: 1px solid #9B9999;
`; 

export const NavBarContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    width: 100%; 
    max-width: 1000px; 

    background-color: white;

    @media(max-width: 568px){
        padding: 0px 16px;
    }
`; 

export const IgBrand = styled.img`
    padding-top: 8px;
`; 

export const DivInput = styled.div`
    display: flex; 
    justify-content: space-around; 

    width: 215px; 
    min-width: 125px; 

    border: solid 1px #dbdbdb;
    border-radius: 3px;
    padding: 5px 10px 5px 16px;

    @media(max-width: 568px){
        display: none;
    }
`; 

export const Input = styled.input`
    width: 100%; 
    height: 100%; 

    margin-left: 8px;
    margin-right: 8px;
    border: none;
`; 

export const DivIcons = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;

    background-color: white;
    width: 11rem;
`; 