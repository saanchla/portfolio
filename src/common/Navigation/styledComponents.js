import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const NavBar = styled(AppBar)`
  && {
    background-color: white;
    padding: 10px 20px;
    a {
      margin: 0 30px;
      text-decoration: none;
      color: #242424;
      text-transform: uppercase;
      &.active {
        font-weight: 600;
        color: #4c6ae1;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 60px;
`;
