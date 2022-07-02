import theme from "../data/theme";
import styled from "styled-components";

export const Title = styled.h1`
text-align: center;
color: ${theme.color1};
`

export const NavBar = styled.nav`
width: ${theme.pageWidth};
min-width: 300px;
display: flex;
justify-content: space-between;
padding: 20px;
align-items: center;
margin: auto;
`
export const Menu = styled.div`
width: 30%;
display: flex;
justify-content: space-around;
`

export const SubLink = styled.a`
color: ${theme.color2};
font-size: 2.5rem;
&:hover {
    color: ${theme.color5};
    cursor: pointer;
};
`

export const ALink = styled.a`
color: ${theme.color2};
text-decoration: none;
&:hover {
    color: ${theme.color5};
    cursor: pointer;
};
`