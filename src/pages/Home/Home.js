import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import background from './images/background.png';
import CaseStudy from './CaseStudy';
import { BannerBox, Header, Intro } from './styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Header background={background} display="flex" alignItems="center" mb={10}>
        <Box mb={isMobile ? 2 : 4} width="100%">
          <Intro variant="italic">Hello there, I am</Intro>
          <Intro>SAANCHLA TRIPATHI</Intro>
          <Intro variant="italic">With a background in Human Resources,</Intro>
          <Intro variant="italic">
            I’m passionate about converting ideas to human-centered digital experiences
          </Intro>
          <Button
            href="https://www.linkedin.com/in/sanchala-tripathi"
            variant="outlined"
            color="secondary"
            mt={10}
          >
            Let&apos;s connect!
          </Button>
        </Box>
      </Header>
      <BannerBox
        display="flex"
        justifyContent="center"
        px={10}
        py={5}
        mt={10}
        mb={isMobile ? 0 : 10}
      >
        What would you like to see me solve?
      </BannerBox>
      <Container>
        {CASE_STUDY_PAGES.map((caseStudy, idx) => (
          <>
            <CaseStudy
              key={caseStudy.replace(/\s+/g, '')}
              title={caseStudy}
              to={DETAILS[caseStudy].pathname}
              description={DETAILS[caseStudy].description}
              imageSrc={DETAILS[caseStudy].imageSrc}
              backgroundColor={DETAILS[caseStudy].backgroundColor}
              inProgress={DETAILS[caseStudy].inProgress}
            />
            {idx !== CASE_STUDY_PAGES.length - 1 && <Divider variant="middle" />}
          </>
        ))}
      </Container>
    </>
  );
};

export default Home;