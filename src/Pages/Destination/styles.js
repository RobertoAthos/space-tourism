import styled from "styled-components"
import background2 from '../../assets/destination/background-destination-desktop.jpg'
import backgroundTablet from '../../assets/destination/background-destination-tablet.jpg'

export const BodyContainer = styled.body`
    background-image: url(${background2});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    @media(max-width:768px){
        background-image: url(${backgroundTablet});
    }
    .title{
    width: 40%;
    margin-left: 7rem;
    padding-top: 4rem;
    }
`
   
export const Container = styled.section`
    width: 100%;
    max-width: 1385px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    @media(max-width:768px){
        flex-direction: column;
        text-align: center;
        .planet-items{
            p{
                text-align: center;
            }
            .infos-text{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            
        }
    }
    }
    .planet-items{
        width: 100%;
        max-width: 445px;
        height: 472px;
        margin-top: 8rem;
        h3{
            font-size: 6.3rem;
            font-family: 'Bellefair', serif;
        }
        p{
            color: #D0D6F9;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 1.1rem;
            margin-bottom: 50px;
            line-height: 30px;
            text-align: justify;
        }
        .main-text{
            margin-bottom: 20px;
            border-bottom: 1px solid #979797;
        }
    }
    button{
        color:white;
        margin-right: 20px;
        text-transform: uppercase;
        margin-bottom: 25px;
        font-weight: bolder;
    }
    button:hover{
        text-decoration: underline;
        text-decoration: underline;
        text-underline-offset: 1rem;
        text-decoration-color:white;
        text-decoration-thickness: 2px;
    }
    li{list-style:none;}
    .infos-text>ul{
        display: flex;
    }
    .infos-text>ul>div{
        margin-right: 5rem;
    }
    .infos-text>ul>div>label{
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 1rem;
        text-transform: uppercase;
        margin-bottom: 18px;
        color: #D0D6F9;
    }
    .infos-text>ul>div>li{
        font-size: 1.4rem;
        font-family: 'Bellefair', serif;
        text-transform: uppercase;
        margin-top: 10px;

    }
`
