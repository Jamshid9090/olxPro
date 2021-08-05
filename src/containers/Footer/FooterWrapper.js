import styled from "styled-components";
const colors = {
    dark: "rgb(0, 47, 52)",
    light: "rgb(236, 234, 255)"
}

const FooterWrapper = styled.footer`
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
}
footer a {
    color: white;
    font-weight: bold;
    display: block;
    text-decoration: none;
    padding: 4px 0px;
    cursor: pointer;
}
`;
export default FooterWrapper;