import styled from "@emotion/styled";
import React from "react";
import { Button } from "~src/components/Button";
import { LogoWithText } from "~src/components/Logo/LogoWithText";

const TITLE = "Powering DeFi on Celo";
const SLOGAN = "Ubeswap is a mobile-first DeFi exchange.";

const IndexPage = () => {
  return (
    <Wrapper>
      <Hero>
        <Header>
          <LogoWithText />
          <a
            href="https://app-alfajores.ubeswap.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ube">Launch App</Button>
          </a>
        </Header>
        <HeroBody>
          <h1>{TITLE}</h1>
          <p>{SLOGAN}</p>
          <Button variant="ube">Learn more</Button>
        </HeroBody>
      </Hero>
      <Mockup></Mockup>
    </Wrapper>
  );
};

const Mockup = styled.div`
  background: radial-gradient(
    49.73% 49.85% at 50.53% 49.91%,
    #8878c3 0%,
    #bbaeeb 21%,
    #571843 67%,
    #000000 100%
  );
  background-blend-mode: color-dodge;
  mix-blend-mode: color-dodge;
  opacity: 0.5;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin-right: 20px;
    height: 40px;
    width: 196px;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeroBody = styled.div`
  text-align: center;
  margin-top: 120px;
  h1 {
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 39px;
  }
  p {
    font-size: 24px;
    line-height: 26px;
    color: #e0e0e0;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.75);
    font-size: 22px;
    line-height: 32px;

    margin-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: min(3%, 46px) 3% 0;
`;

export default IndexPage;
