import styled from "styled-components";
import background3 from '../../assets/crew/background-crew-desktop.jpg'

export const CrewBody = styled.body`
    background-image: url(${background3});
    background-size: cover;
    background-repeat: no-repeat;
`
export const Container = styled.section`
    width: 100%;
    max-width: 1385px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .crew-container{
        max-width: 420px;
        h3{
            color: #979797;
            font-size: 2rem;
            font-family: 'Bellefair', serif;
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        h2{
            font-size: 2.3rem;
            color:white;
            font-family: 'Bellefair', serif;
            margin-bottom: 28px;
            text-transform: uppercase;

        }
        p{
            text-align: justify;
            line-height: 30px;
            color: #D0D6F9;
            font-size: 1.1rem;
            margin-bottom: 40px;
            font-family: 'Barlow Condensed', sans-serif;
        }
        .btn-crew>button{
            background-color: white;
            margin: 10px;
            padding: 10px;
            font-family: 'Bellefair', serif;
            font-size: 1rem
        }
        .title{
            margin-bottom: 8rem;
        }
    }
`