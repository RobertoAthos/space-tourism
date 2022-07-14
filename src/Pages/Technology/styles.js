import styled from 'styled-components'
import background4 from '../../assets/technology/background-technology-desktop.jpg'

export const TechBodyContainer = styled.body`
background-image: url(${background4});
background-size: cover;
background-repeat: no-repeat;
height: 100%;
color: white;
.title{
    width: 40%;
    margin-left: 7rem;
    padding-top: 4rem;
    }
`
export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    .tech-text{
        display: flex;
        padding-left: 4rem;
        .main-text{
            padding-left: 5rem;
            width: 100%;
            max-width: 490px;
            height: 300px;
        }
    }
    button{
        border: 1px solid #979797;
        border-radius: 100%;
        color: white;
        font-family: 'Bellefair', serif;
        width: 80px;
        height: 80px;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 25px;
    }
    h1{
        font-family: 'Bellefair', serif;
        font-size: 2rem;
        text-transform: uppercase;
        margin:20px 0px 20px 0px;
    }
    p,span{
        font-family: 'Barlow Condensed', sans-serif;
        color: #979797;
        font-size: 1.1rem;
        line-height: 30px;
        text-align: justify;
    }
   
`