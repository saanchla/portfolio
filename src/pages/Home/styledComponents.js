import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

export const Header = styled(Box)`
  && {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
      url(${({ background }) => background});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
  }
`;

export const HeaderButton = styled(Button)`
  && {
    margin-top: 60px;
  }
`;

export const Intro = styled.div`
  font-family: ${({ variant }) =>
    variant === 'small' ? "'Montserrat', serif" : "'Oswald', sans-serif"};
  font-size: ${({ variant }) => (variant === 'small' ? '23px' : '65px')};
  font-weight: 400;
  letter-spacing: ${({ variant }) => (variant === 'small' ? '1px' : '5px')};
  margin-bottom: ${({ variant }) => (variant === 'small' ? '5px' : '50px')};
  @media (max-width: 960px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export const BannerBox = styled(Box)`
  && {
    font-size: 28px;
  }
`;

// TODO: Keep?
export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: all 0.2s ease;
`;

export const CaseStudyLink = styled(Link)`
  position: relative;
  text-decoration: none;
`;

// TODO: Keep?
export const CaseStudyBox = styled(Box)`
  && {
    background-color: ${({ backgroundColor }) => backgroundColor || '#ededed'};
  }
`;

export const CaseStudyTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 2;
  margin-bottom: 12px;
`;

export const CaseStudyContent = styled(Box)`
  && {
    text-align: ${({ isMobile }) => (isMobile ? 'center' : 'left')};
  }
`;

export const CaseStudyImage = styled.img`
  padding: ${({ isMobile }) => (isMobile ? '50px 30px 0' : '30px 0')};
`;
