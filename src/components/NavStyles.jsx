import styled from 'styled-components'

export const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
box-sizing: border-box;
background-color: pink;
color: white;
background: red; /* For browsers that do not support gradients */
background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet); /* For Safari 5.1 to 6.0 */
background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Opera 11.1 to 12.0 */
background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Firefox 3.6 to 15 */
background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); /* Standard syntax (must be last) */
hight: 175px;
`