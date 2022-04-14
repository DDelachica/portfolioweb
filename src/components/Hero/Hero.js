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
        Daniel De La Chica
      </SectionTitle>
      <SectionText>
        Just another human trying to survive out here.
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;