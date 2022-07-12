import styled from "styled-components"
import background2 from '../../assets/destination/background-destination-desktop.jpg'

export const BodyContainer = styled.body`
    background-image: url(${background2});
    height: 100vh;
`
   
export const Container = styled.section`
    width: 100%;
    max-width: 1385px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    height: 100vh;
    .planet-text{
        width: 100%;
        max-width: 445px;
        height: 472px;
        h3{
            font-size: 6.3rem;
            font-family: 'Bellefair', serif;
        }
        p{
            color: #D0D6F9;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 1.03rem;
        }
    }
    button{
        color:white;
        margin: 20px;
        
    }

`
