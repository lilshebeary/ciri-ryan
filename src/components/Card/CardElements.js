import styled from "styled-components";

export const CardContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 320px;
    padding: 30px;
    margin-left: .5em;
    margin-right: .5em;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const CardIcon = styled.img`
    height: 130px;
    width: 160px;
    margin-bottom: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`
export const CardH1 = styled.h1`
    margin-top: 180px;
    font-size: 2rem;
    font-family: 'Quicksand', sans-serif;
    color: #00000C;
    justify-content: center;
    padding-bottom: .3em;
    margin-bottom: 34px;
    
    @media screen and (max-width: 1000px) {
        font-size: 2rem;
        margin-top: 40px;
    } 
    @media screen and (max-width: 900px) {
        font-size: 2rem;
        margin-top: 0px;
    } 
    @media screen and (max-width: 800px) {
        font-size: 2rem;
        margin-top: 90px;
    } 
    @media screen and (max-width: 770px) {
        font-size: 2rem;
        margin-top: 100px;
    } 
    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-top: 80px;
    } 
`
export const CardH2 = styled.h2`
    font-size: 1.2rem;
    color: #00000c;
    margin-bottom: 0;
`
export const CardP = styled.p`
    font-size: 1rem;
    text-align: center; 

`

export const CardLink = styled.button`
    font-size: 1rem;
    color: #00000c;
    border-color: #4DB6AC;
    outline: #4DB6AC;
    text-decoration: none;
    &:hover {
        background: #4DB6AC;

    }
    & a {
        text-decoration: none;
    }
`