import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technoligies in the web development world 
      from Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
