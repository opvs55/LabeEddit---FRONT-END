import styled from "styled-components";



export const Card = styled.div`
border-radius: 12px;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;
background-color: #FBFBFB;
border: 1px solid #E0E0E0;
width: 364px;
display: flex;
flex-direction: column;
margin: 10px;


    .Title{
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-size: 12px;
        font-weight: 400;
        color: #6F6F6F;
        flex-grow: 0;
        }
    .Context{
        overflow-wrap: break-word;
        flex-grow: 1;
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;

    }

    .BottonContainer{
        display: flex;
    }
    .FirstBalloon{
        display: flex;
        width: 98px;
        height: 28px;
        border-radius: 28px;
        padding: 4.67px;
        justify-content: space-between;
        gap: 15.92px;
        border: 0.793333px solid #ECECEC;
    }
    .SecondBallon{
        display:flex;
        width: 65.33px;
        height: 28px;
        border-radius: 28px;
        padding: 4.67px;
        gap:8px;
        border: 0.793333px solid #ECECEC;
        align-items: center;
        justify-content: center;
        position: relative;
        left: 10px;
    }
    .FirstBalloon>p{
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 9.56098px;
        line-height: 12px;
        text-align: center;
    } 
    .SecondBallon{
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 9.56098px;
        line-height: 12px;
        text-align: center;     
    }
    .FirstBalloon> img{
        cursor: pointer;
    }
    .SecondBallon> img{
        cursor: pointer;
    }

    
`