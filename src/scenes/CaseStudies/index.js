import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { PageContainer } from 'src/common/PageContainer';
import { device } from 'src/consts/device';
import caseStudiesData from 'src/data/caseStudies';

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  transition: all 0.35s ease;

  @media ${device.tablet} {
    width: 90%;
  }
  @media ${device.laptopL} {
    width: 80%;
  }
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.fonts.primaryFontColor};
  margin: 70px auto;

  @media ${device.tablet} {
    font-size: 2em;
  }
  @media ${device.laptop} {
    font-size: 3em;
  }
`;

const CaseStudiesList = styled.ul`
  position: relative;
  width: 90%;
  margin: 0 auto;
  list-style: none;
  & > li {
    margin-bottom: 80px;
  }
  @media ${device.tablet} {
    & > li {
      margin-bottom: 135px;
    }
  }
`;

const CaseStudyLink = styled.a`
  display: block;
  /* background-image: url('https://partners.kiwi.com/wp-content/uploads/2018/11/tequila_logo_white@2x-copy.png'); */
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  width: 80%;
  margin: 0 auto;
  opacity: 1;
  height: 290px;
  background-color: #1c1d25;
  position: relative;
  box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.45);
  /* background-position: 50%; */
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.35s ease;
  border-radius: 10px;
  @media ${device.tablet} {
    height: 340px;
  }
  @media ${device.laptop} {
    height: 480px;
  }

  &:hover ${CaseStudyText} {
    font-size: 1.2em;
  }
`;
const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 15px;
  font-weight: 500;
  @media ${device.tablet} {
    font-size: 2em;
  }
  @media ${device.laptop} {
    font-size: 3em;
  }
`;
const Description = styled.p`
  font-size: 1em;
  /* font-weight: 300; */
  margin-bottom: 10px;
  @media ${device.tablet} {
    font-size: 1em;
  }
  @media ${device.laptop} {
    font-size: 1.5em;
  }
`;

const CTA = styled.button`
  font-size: 1em;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.turqoise};
  color: white;
  border-radius: 5px;
  font-weight: 600;
  border: ${({ theme }) => `1px solid ${theme.colors.turqoise}`};
  @media ${device.tablet} {
    font-size: 1em;
  }
  @media ${device.laptop} {
    font-size: 1.5em;
  }
`;
const CaseStudyMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
`;

const CaseStudyText = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
  z-index: 10;
  max-width: 600px;
  line-height: 1.5;
  letter-spacing: 1px;
  @media ${device.tablet} {
    left: 45px;
    bottom: 45px;
  }
  @media ${device.laptop} {
    left: 90px;
    bottom: 90px;
  }
`;

const CaseStudies = () => {
  return (
    <PageContainer align="baseline" direction="column">
      <Header>Case Studies</Header>
      <Content>
        <CaseStudiesList>
          {caseStudiesData.map((caseStudy, i) => (
            <li key={i}>
              <Fade bottom={true} duration={1000} delay={300 * i} distance="30px">
                <CaseStudyLink href={caseStudy.url} backgroundImage={caseStudy.imageUrl}>
                  <CaseStudyMask />
                  <CaseStudyText>
                    <Title>{caseStudy.name}</Title>
                    <Description>{caseStudy.description}</Description>
                    <CTA>Find out more</CTA>
                  </CaseStudyText>
                </CaseStudyLink>
              </Fade>
            </li>
          ))}
        </CaseStudiesList>
      </Content>
    </PageContainer>
  );
};

export default CaseStudies;