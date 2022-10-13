import { NavLink } from "react-router-dom";
import styled from 'styled-components'

export const StyledLink = styled(NavLink)`
color: black;
text-decoration: none;
letter-spacing: 0.2em;
font-weight: bold;
padding-left: 10px;
&.active {
  color: white;
}
`;