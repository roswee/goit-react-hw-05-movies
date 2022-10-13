import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieMiniImg = styled.img`
width: 80px;
`

export const TrendsList = styled.ul`
text-decoration: none;
display: flex;
flex-wrap: wrap;
align-items: center;
list-style: none;
padding-left: 15px;
`

export const TrendsElement = styled.li`
box-sizing: border-box;
width: 300px;
margin: 10px;`

export const TrendLink = styled(Link)`
text-decoration: none;
color: white;
font-weight: 500;
padding-left: 10px;
`

export const HomepageSection = styled.section`
background: linear-gradient(to bottom, grey , black);
padding-left: 20px;
`