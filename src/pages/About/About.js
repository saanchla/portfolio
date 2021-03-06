import React from 'react';
import { Box, Button, Grid, useMediaQuery, useTheme } from '@material-ui/core';

import about from './images/about.png';
import { AboutContainer, AboutHeading, AboutContent } from './styledComponents';
import { P } from '../../common/styledComponents';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AboutContainer>
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={isTablet ? 'center' : 'inherit'}
            height="100%"
          >
            <img src={about} alt="" />
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Box px={isMobile ? 3 : 0} pl={isMobile ? 3 : 10} py={5}>
            <AboutHeading>A little about me</AboutHeading>
            <AboutContent>
              <P>
                I am a curious, self-driven designer passionate in emerging technologies
                and advocating UX design across all fields of work. Having studied
                psychology in my undergrad, I worked as a recruiter for nearly 2 years.
                During my tenure, I had the opportunity to meet a diverse range of people
                and developed a keen ability to tangibly assess their skill set, and apply
                that towards my clients’ needs. Most importantly, I learned to make the
                candidate the focus of the process. Communication and empathy is what I’m
                all about. This is what led me to pursue a career in UX design. At
                BrainStation I learned to take skills from my previous role and apply them
                to creating fulfilling experiences for users. I was able to gain a firm
                grasp on the fundamentals of design thinking, as well as the most
                prominent design tools used in the industry. I look forward to continue to
                apply this knowledge in new and challenging ways.
              </P>
              <P>
                I am currently working as a freelance UX/UI Designer where I’m able to own
                the full design process, and collaborate with some truly brilliant people.
                I am also part of the senior testers at usertesting.com, which further
                enhances my insights into creating great user experiences.
              </P>
              <P>
                When I’m not wireframing, I like taking different dance classes, and
                indulging my love for trying new foods.
              </P>
              <P>
                Feel free to connect with me to discuss my work, or just geek out over
                theories of human behavior!
              </P>
              <Button
                variant="outlined"
                color="primary"
                href="mailto:sanch.tripathi@gmail.com"
              >
                Send me an email
              </Button>
            </AboutContent>
          </Box>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About;
