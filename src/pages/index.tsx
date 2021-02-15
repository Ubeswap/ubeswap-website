import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Button } from "~src/components/Button";
import { LogoWithText } from "~src/components/Logo/LogoWithText";

const IndexPage = () => {
  return (
    <Wrapper>
      <Hero>
        <Header>
          <LogoWithText />
          <Button
            css={css`
              cursor: not-allowed;
            `}
            variant="green"
            onClick={() => {
              alert("Coming soon!");
            }}
          >
            Launch App
          </Button>
        </Header>
        <HeroBody>
          <h1>
            The exchange
            <br />
            for DeFi
            <br />
            on Celo
          </h1>
          <p>
            Ubeswap is a protocol for decentralized exchange
            <br />
            and automated liquidity provision on Celo.
          </p>
          <a href="https://twitter.com/ubeswap" target="_blank">
            <Button variant="pink">Subscribe to updates</Button>
          </a>
        </HeroBody>
      </Hero>
    </Wrapper>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;
  svg {
    height: 40px;
    width: 196px;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgb(8, 2, 30) 0%, rgb(18, 4, 70) 146.21%);
  padding: 0 30px;
`;

const HeroBody = styled.div`
  margin-top: 120px;
  h1 {
    font-weight: 300;
    font-size: 70px;
    line-height: 84px;
  }
  p {
    font-weight: 200;
    color: rgba(255, 255, 255, 0.75);
    font-size: 22px;
    line-height: 32px;

    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Wrapper = styled.div``;

export default IndexPage;
