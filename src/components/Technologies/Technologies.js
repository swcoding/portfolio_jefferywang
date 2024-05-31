import React from "react";
import { DiPython, DiDatabase } from "react-icons/di";
import { TbSql } from "react-icons/tb";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section>
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the data science world. From
      Model Building to Data Engineering.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>sklearn, XGboost</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Data Engineering</ListTitle>
          <ListParagraph>GCP, Airflow</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <TbSql size="3rem" />
        <ListContainer>
          <ListTitle>Data Analytics</ListTitle>
          <ListParagraph>Experienced with SQL</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
