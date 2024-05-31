import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 4, text: "Machine Learning Experience" },
  { number: 20, text: "Clients" },
  { number: 80, text: "Blog Posts" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider></SectionDivider>
    <br />
    <br />
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
