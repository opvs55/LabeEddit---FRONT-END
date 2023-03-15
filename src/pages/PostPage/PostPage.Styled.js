import styled from "styled-components";



export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


.ContainerTop{
    width: 390px;
    height: 40px;
    background: #EDEDED;
    margin-bottom: 20px;
}
.logoTop{
    position: relative;
    left: 180px;
    top: 3px;
}


form > button{
    width:359px;
    height: 47px;
    border-radius: 12px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 145px;
    margin-top: 10px;
}

.ContainerTop > button{
    border: 0px solid white;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #4088CB;
    position: relative ;
    left: 290px;
    bottom: 4px;
}
.Line{
    width: 363.01px;
    border: 1px solid;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    margin-top:20px;
    margin-bottom: 10px;
}



`



export const CardContainer = styled.div`
background-color:white;


`