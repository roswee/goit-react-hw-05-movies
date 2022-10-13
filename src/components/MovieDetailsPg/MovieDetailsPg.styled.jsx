import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Details = styled.div`
display: flex;
color: white;
background: linear-gradient(to right, grey , black);
margin: none;
`;

export const Description = styled.div`
padding-left: 15px;
`

export const MovieInfo = styled.ul`
background-color: rgba(0, 0, 0, 0.5);
list-style: none;
color: white
`

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: white;
box-sizing: border-box;
text-shadow: 3px 3px 5px white;
width: 100vw;
`

export const MovieDetails = styled.div`
background: linear-gradient(to right, grey , black);
`

