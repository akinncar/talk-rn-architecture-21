import React from 'react';
import styled from 'styled-components'
import { space } from 'styled-system';

import { Root } from './Intro';

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 100px;
  ${space}
  color: #9c90e8;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const IconImage = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

const Username = styled.span`
  font-size: 14px;
  margin-left: 20px;
`;

const SocialMediaLink = ({ name, link, username }) => (
  <div>
    <Link href={link} target="_blank">
      <Row>
        <IconImage src={`./img/${name}`} />
        <Username>{username}</Username>
      </Row>
    </Link>
  </div>
);


export const Thanks = () => (
  <Root>
    <Center>
      <Title mt={100}>Thanks!</Title>
      <SpaceBetween>
      <SocialMediaLink
        name={'github.png'}
        link={'https://github.com/akinncar'}
        username={'@akinncar'}
      />
      <SocialMediaLink
        name={'twitter.png'}
        link={'https://twitter.com/akinncar'}
        username={'@akinncar'}
      />
    </SpaceBetween>
    </Center>
  </Root>
);