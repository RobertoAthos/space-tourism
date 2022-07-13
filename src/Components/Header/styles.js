import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 96px;
    padding-top: 3rem;
    @media(max-width:1000px){
        padding-top: 0;
    }
    width: 100%;
    max-width: 1385px;
    margin: auto;
   .logo{
    padding-left: 4rem;
   }
   .line{
    width:473px;
    height: 1px;
    background-color:#979797 ;
    margin-left: 8rem;
    }

` 
export const Links = styled.div`
    background: rgba( 151, 151, 151, 0.2 );
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    width:100%;
    max-width:830px;
    @media(max-width:1270px){
        max-width: 729px;
}
    @media(max-width:1000px){
        max-width: 450px;
        span{
            display: none;
        }
    }
    height:96px;
    display: flex;
    justify-content:center;
    align-items:center;
   p{
    color: white;
   }
   
    nav>ul{
        display: flex;
        justify-content:center;
        align-items:center;
        width:100%;
        font-family: 'Barlow Condensed', sans-serif;
    }
    li{
        margin: 30px;
        @media(max-width:1000px){
            margin: 10px;
        }
        font-size: 1.2rem;
        list-style: none;
        display: flex;
        justify-content:center;
        align-items:center;
    }
  
    .active{
        text-decoration: underline;
        text-underline-offset: 2.3rem;
        text-decoration-color:white;
        text-decoration-thickness: 2px;
    }
    li:hover{
        text-decoration: underline;
        text-underline-offset: 2.3rem;
        text-decoration-color:white;
        text-decoration-thickness: 2px;
    }
    @keyframes appear {
        from{
            width: 0
        }
        to{
            width: 100%;
        }
    }


`