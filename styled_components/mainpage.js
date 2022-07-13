import theme from "../data/theme";
import styled from "styled-components";

export const MainWrapper = styled.main`
width: ${theme.pageWidth};
margin: 20px auto;
`
export const Section = styled.div`
margin: auto;
width: 80%;
height: 75vh;
text-align: center;
background-color: ${props => props.theme.main};
padding: 50px;
`
export const Column = styled.div`
display:flex;
justify-content: space-between;
margin: auto 0;

`

export const Description = styled.div`
font-size: 24px;
text-align: center;
width: 70%
`
export const Row = styled.div`
display: flex;
justify-content: space-around;
padding: 15px;
flex-wrap: wrap;
margin: auto 0;
`

export const Heading = styled.h2`
color: ${theme.color6};
font-size: 2.5em;
text-align: center;

`

export const Card = styled.div`
width: 300px;
height: 500px;
padding: 8px;
border: 3px solid ${theme.color4};
margin: 10px;
`

export const CardImage = styled.img`
width: 290px;
display: block;
height: 290px;
object-fit: cover;
`

export const CardTitle = styled.h3`
color: ${theme.color4}
`

export const CardDescription = styled.p`
    margin: 2px;
`

export const CardButton = styled.button`
width: 40%;
background-color: ${theme.color1};
color: ${theme.color7};
border-radius: 25px;
padding: 10px;
text-align: center;
text-decoration: none;
`
export const Calendar = styled.button`
width: 40%;
background-color: ${theme.color3};
color: ${theme.color6};
border-radius: 25px;
padding: 10px;
text-align: center;
text-decoration: none;
`
export const BlogWrapper = styled.article`
width: 325px;
margin: auto;
text-align: center;
color: ${theme.color3};
border: 3px solid ${theme.color2}
`

export const BlogTitle = styled.h1`
&:hover {
    cursor: pointer;
    color: ${theme.color1}
}
`

export const PostImage = styled.img`
width: 700px;
height: 500px;
object-fit: cover;
`

export const PostWrapper = styled.main`
width: ${theme.pageWidth};
margin: 20px auto;
text-align: center;
color: ${theme.color3};
border: 3px solid ${theme.color2}
`