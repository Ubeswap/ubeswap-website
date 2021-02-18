import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Button } from "~src/components/Button";
import { LogoWithText } from "~src/components/Logo/LogoWithText";

export const MainLayout: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <Wrapper>
      <Hero>
        <Header>
          <LogoWrapper>
            <LogoWithText />
          </LogoWrapper>
          <Navbar>
            <a
              href="https://docs.ubeswap.org/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
            <a
              href="https://twitter.com/ubeswap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://discord.com/invite/zZkUXCMPGP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://app-alfajores.ubeswap.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ube">Launch App</Button>
            </a>
          </Navbar>
        </Header>
        {children}
      </Hero>
    </Wrapper>
  );
};

const Navbar = styled.div`
  display: grid;
  grid-column-gap: 28px;
  grid-auto-flow: column;

  align-items: center;

  a {
    line-height: 0;
    text-decoration: none;
    color: #fff;
    :hover {
      color: #8878c3;
    }
    transition: color 0.2s ease;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
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

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: min(3%, 46px) 3% 0;
`;
