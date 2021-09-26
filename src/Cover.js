import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

import { Root } from './Intro';

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #388bfd;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #9c90e8;
  ${space} 
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={"./img/react.png"} width={300} />
      <Title mt={20}>React Native Architecture in 2021</Title>
      {/* <Subtitle mt={20}>Subtitle</Subtitle> */}
      <MeName mt={100}>Akinn Rosa</MeName>
    </Center>
  </Root>
);