import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Button } from "~src/components/Button";
import { MainLayout } from "~src/components/layouts/MainLayout";

const TITLE = <>Powering DeFi on&nbsp;Celo</>;
const SLOGAN = "Ubeswap is a mobile-first DeFi exchange.";

const IndexPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Ubeswap | Celo DeFi Exchange</title>
      </Head>
      <HeroBody>
        <h1>{TITLE}</h1>
        <p>{SLOGAN}</p>
        <Button variant="ube">Learn more</Button>
      </HeroBody>
      <MockupWrapper>
        <Mockup>
          <MockupBg />
          <Image src="/wallet-preview@1000w.png" width={1000} height={990} />
        </Mockup>
      </MockupWrapper>
    </MainLayout>
  );
};

const MockupBg = styled.div`
  position: absolute;
  left: -64%;
  top: -20%;
  width: 228%;
  height: 140%;

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

const MockupWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: end;
  justify-content: center;
`;

const Mockup = styled.div`
  position: relative;
  padding: 0 20px;
  img {
    max-height: 50vh;
  }
  margin: 0px auto;
`;

const HeroBody = styled.div`
  text-align: center;
  margin-top: 120px;
  @media only screen and (max-width: 767px) {
    margin-top: 60px;
  }

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

export default IndexPage;
