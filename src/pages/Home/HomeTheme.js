import styled from "styled-components";
const colors = {
    dark: "rgb(0, 47, 52)",
    light: "rgb(236, 234, 255)"
}

const HomeTheme = styled.div`
transition: 1s;

&.light{
    background-color: ${colors.light};
    color: ${colors.dark} !important;
    a{
        color: ${colors.dark} !important;
    }
}
&.dark{
    background-color: ${colors.dark};
    color: ${colors.light} !important;
    a{
        color: ${colors.light} !important;
    }
}
.HomeTheme  {
    color: white;
}

`;
export default HomeTheme;