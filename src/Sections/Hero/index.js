// This is HeroSection component, Main top section of website

import styled, { keyframes } from "styled-components";

import pinkBlob from "../../assets/blobPink.png";
import purpleBlob from "../../assets/blob purple.png";
import whiteBlob from "../../assets/blob white.png";
import arrow from "../../assets/play.png";
import talk from "../../assets/speech-bubble.png";

import Mobile from "../../assets/first.png";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #white;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  background-color: var(--white);

  display: flex;
  padding: 1rem 5rem;

  justify-content: center;
  align-items: center;
  width: 100vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 1rem 0rem;
    align-items: center;
    width: 95vw;
    margin: 0 auto;
  }
`;

const MobileSvg = styled.img`
  width: 50%;
  margin-left:20px;
  height: auto;
  max-width: 100px:
  z-index: 7;
  @media only Screen and (max-width: 48em) {
    align-self: center;
    bottom: 0;
     width:100%;
     margin : 0;

  }
 
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  color: var(--black);

  font-size: calc(1.2rem + 1vw);
  max-width: 700px;

  line-height: 1.4;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
  margin: 25px 0;
  max-width: 700px;
  letter-spacing: 1.3px;
`;

const CTA = styled.button`
  background-color: var(--purple);
  color: #ffff;
  padding: 1rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.8rem + 0.8vw);
  font-weight: 800;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.8rem 0rem;
    width: 100%;
    justify-content: center;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
const CTZ = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;
  @media only screen and (max-width: 40em) {
    justify-content: center;
  }
`;
const CTB = styled.button`
  background-color: var(--purple);
  color: #00000;
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  border-style: solid;

  border-radius: 20px;
  border-width: 2px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.8rem 0rem;
    width: 100%;
    justify-content: center;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      {/* <Blobs>
        <PinkBlob>
          <img src={pinkBlob} alt="" width="400" height="400" />{" "}
        </PinkBlob>
        <WhiteBlob>
          <img src={whiteBlob} alt="" width="400" height="400" />
        </WhiteBlob>
        <PurpleBlob>
          <img src={purpleBlob} alt="" width="400" height="400" />
        </PurpleBlob>
      </Blobs> */}

      <MainContent id="home">
        <Lb id="leftBlock">
          <Title>
            Increase Your Digital Footprint and Manage Your Social Media With
            Our Top Experts
          </Title>

          <SubText>
            Welcome to Fadain Digital, your one stop for digital solutions. We
            believe every brand can be told better digitally.
          </SubText>
          <CTZ>
            <CTA>Let's Talk &nbsp;</CTA>
            <CTB>
              <img src={arrow} alt="cta" width="100" height="100" />
              &nbsp; How It Works? &nbsp;
            </CTB>
          </CTZ>
        </Lb>

        <MobileSvg
          src={Mobile}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
