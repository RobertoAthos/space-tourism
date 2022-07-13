import styled from "styled-components";
import background3 from '../../assets/crew/background-crew-desktop.jpg'

export const CrewBody = styled.body`
    background-image: url(${background3});
    background-size: cover;
    background-repeat: no-repeat;
   @media(max-width:2560px) {
    height: 100vh;
   }
 
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
        h1{
            font-size: 3rem;
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
            background: rgba( 151, 151, 151, 0.2 );
            backdrop-filter: blur( 6px );
            -webkit-backdrop-filter: blur( 6px );
            margin: 10px 10px 10px 0px;
            padding: 10px;
            font-family: 'Bellefair', serif;
            font-size: 1rem;
            color: white;
            border-radius: 5px;
        }
        .title{
            padding-bottom: 8rem;
        }
        img{
            max-width: 500px;
        }
    }
`