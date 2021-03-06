import React from 'react';
import {
  GatsbyIcon,
  StorybookIcon,
  TailwindIcon,
  GithubIcon,
  StyledComponentsIcon,
} from 'images/icons';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col h-screen`}
`;

const Content = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase mt-5
`;

const Text = tw.p`
  text-xl text-gray-700 my-4
`;

const Logos = styled.div`
  ${tw`flex items-center justify-around`}
  svg,
  img {
    width: 64px;
  }
`;

const Footer = styled.footer`
  ${tw`flex justify-center`}
  svg {
    width: 30px;
    path {
      &:hover {
        fill: palevioletred;
      }
    }
  }
`;

const DemoContent = () => (
  <Wrapper>
    <Content>
      <Logos>
        <GatsbyIcon />
        <TailwindIcon />
        <StyledComponentsIcon />
        <StorybookIcon />
      </Logos>
      <Heading>Hello, world!</Heading>
      <Text>Welcome to the Gatsby Tailwind CSS + Styled-Components + Storybook Starter.</Text>
      <Footer>
        <a
          href="https://github.com/trame-digitali/gatsby-seo-starter"
          target="_blank"
          rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </Footer>
    </Content>
  </Wrapper>
);

export default DemoContent;
