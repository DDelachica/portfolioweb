import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        My name is <br />
        Daniel De La Chica <br />
         
      </SectionTitle>
      <SectionText>
        The answer to the question you're asking yourself right now:<br /> 
        De La Chica (deh) (lah) (chee-kah).<br />
        <br />
        Continuing my drive to expand my knowledge in the quickly evolving world of technology with all the resources and tools that are out on the internet.
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;