import styled from "styled-components"


export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.LogoContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 80px;
    margin-top: 60px;
}

input{
    width: 364px;
    height: 60px;
    border-radius: 4px;
    background: #FFFFFF;
    border: 1px solid #D5D8DE ;
    box-sizing: border-box;
    padding: 10px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin: 5px;
}
.input2{
    margin-bottom: 60px;
}

.Login{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 365px;
    height: 51px;
    border-radius: 27px;
    padding: 13px 133px;
    gap: 10px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: 0px solid white;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: white;
    text-align: center;
    color: #FFFFFF;
}

.Line{
    width: 363.01px;
    height: 2px;
    background-image: linear-gradient(45deg, #FF6489 30%, #F9B24E 70%);
    margin-top:20px;
    margin-bottom: 10px;
}

.NewAccountButton{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 27px;
    width:365px;
    height: 51px;
    gap: 10px;
    border: 1px solid rgba(254, 126, 2, 1);
    background: white;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #FE7E02;
}
`