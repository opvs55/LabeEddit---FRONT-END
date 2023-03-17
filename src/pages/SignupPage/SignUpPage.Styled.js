import styled from "styled-components";





export const SignUpContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


.ContainerTop{
    width: 390px;
    height: 40px;
    background: #EDEDED;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
}
.LogoTop{
    position: relative;
    left: 180px;
    top: 3px;
    width: 28.02px;
    height: 31.67px;
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
    cursor:pointer;
}
.SignUpInputContainer{
    width: 390px;
}

.LastInputContainer{
    margin-bottom: 20px;
}

.TextTittleTop{
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 43px;
    color: #373737;
    padding: 2px 2px;
    margin-bottom: 100px;
}
.InputSignUp{
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
.CheckBoxContainer{
    display: flex;
    justify-content: center;
    align-items: center;
}
.ContractText{
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
}
.CheckBoxText{
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    width: 100px;
    flex-grow: 1;
    margin-top: 20px;
}
.InputCheckBox{
    border: 1px solid #C4C4C4;
    border-radius: 2px;
    box-sizing: border-box;
    width:17.85px;
    margin: 5px;
    height: 18px;
    flex-grow: 0;
    margin-top: 20px;
}
.SignUp{
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
    margin-top: 30px;
}

`