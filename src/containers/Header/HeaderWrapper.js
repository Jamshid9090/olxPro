
import styled from "styled-components";

const colors = {
    dark: "rgb(0, 47, 52)",
    light: "rgb(236, 234, 255)"
}

const HeaderWrapper = styled.header`
    transition: 1s;
    
    &.light{
        background-color: ${colors.light};
        a{
            color: ${colors.dark} !important;
            
        }
    }
    &.dark{
        background-color: ${colors.dark};
        a{
            color: ${colors.light} !important;
        }
        .iconBox{
            color: ${colors.light} !important;
        }
    }
    .button1 {
        position: absolute;
        right: 14rem;
    }
    .imgBox {
        width: 70px;
    }
    .profil {
        font-weight: bold;
        text-decoration: none;
        font-size: 18px;
        position: absolute;
        right: 27rem;
    }
    .container {
        display: inline-block;
        margin: 0 auto;
    }
    .iconBox {
        /*padding-right: 25px;*/
        /*left: 20px !important;*/
        /*display: inline;
        position: relative;*/
        margin-left: 30px;
    }
    
`;

export default HeaderWrapper;