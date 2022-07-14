import styled from "styled-components";
import background from '../../assets/home/background-home-desktop.jpg'

export const BodyContainer = styled.body`
    background-image:url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`
export const SectionContainer = styled.section`
    width: 100%;
    max-width: 1385px;
    margin: auto;
    margin-top: 8rem;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .text{
        width: 100%;
        max-width: 450px ;
        height: 382px;

        h3,h2{
            margin-bottom: 20px;
        }
        h3{
            font-family: 'Barlow Condensed', sans-serif;
            font-size:1.5rem;
            color: #D0D6F9;
        }
        h2{
            font-family: 'Bellefair', serif;
            font-size: 8rem;
        }
        p{
            font-size: 1.2rem;
            line-height: 30px;
            color: #D0D6F9;
            font-family: 'Barlow Condensed', sans-serif;
        }
    }
    .explore{
        background-color: white;
        width: 274px;
        height: 274px;
        border-radius: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        color: black;
        transition: transform 300ms;
        font-family: 'Bellefair', serif;
    }
    .explore:hover{
        transform: scale(1.05);
    }
    
`