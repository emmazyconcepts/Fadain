import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pics from "../assets/a1.png";
import Work from "../assets/Avatar.png";
import Face from "../assets/facebook.png";
import Love from "../assets/Icon.png";

// components
const Bd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 86.2px 0px;
  width: auto;

  /* White */

  background: #ffffff;
  @media only screen and (max-width: 48em) {
    width: 414px;
  }

  /* Inside auto layout */
`;
const Head = styled.div`
  font-family: Rasputin;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 54px;
  /* identical to box height, or 125% */

  text-align: center;
  letter-spacing: -0.02em;
`;
const Up = styled.div`
  font-family: Recoleta;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 70px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #c6008e;
`;
const Down = styled.div`
  font-family: Recoleta;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: auto;
  margin-top: 2rem;

  text-align: center;

  /* Gray/500 */

  color: #667085;
`;

const Bd3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0px;

  position: static;
  width: 1940px;
  height: 700px;
  left: 0px;
  top: 1215px;

  /* White */

  background: #ffffff;

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
  @media only Screen and (max-width: 48em) {
    position: static;
    width: 414px;
    height: auto;
    margin-top: 1150px;
  }
`;
const Bd2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 86.2px 0px;

  position: static;
  width: auto;
  height: 675.23px;
  left: 0px;
  top: 427.31px;

  /* Gray/50 */

  background: #f9fafb;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
  @media only Screen and (max-width: 48em) {
    position: absolute;

    height: 1175.23px;
    width: 414px;
  }
`;
const Img = styled.div`
  margin-left: -1100px;
  img {
    width: 500px;

    margin-left: 300px;

    @media only Screen and (max-width: 48em) {
      margin-left: 1100px;
      width: 300px;
      margin-top: 750px;
    }
  }
`;
const Text = styled.div`
  position: absolute;

  left: 1000px;
  margin-top: 30px;
  @media only Screen and (max-width: 48em) {
    margin-left: -1100px;
  }
`;
const Head2 = styled.div`
  position: absolute;
  width: 600px;
  height: 108px;
  left: 50px;
  top: 32.78px;

  font-family: Rasputin;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 54px;
  @media only Screen and (max-width: 48em) {
    width: 400px;
    font-size: 40px;
    left: 120px;
    top: -15px;
  }
`;
const Down2 = styled.div`
  position: absolute;

  left: 50px;
  top: 0.78px;
  font-family: Recoleta;
  font-style: blod;
  font-weight: 100;
  font-size: 30px;
  line-height: 22px;
  width: 500px;

  color: #c6008e;
  @media only Screen and (max-width: 48em) {
    width: 400px;
    font-size: 20px;
    left: 150px;
    top: -55px;
  }
`;
const H1 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 65px;
  left: 50px;
  top: 180px;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 53.875px;
  line-height: 65px;
  /* identical to box height, or 120% */

  letter-spacing: -0.02em;

  color: #703f98;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 120px;
  }
`;
const H2 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 26px;
  left: 50px;
  top: 250px;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 16.1625px;
  line-height: 25px;
  /* identical to box height, or 156% */

  /* Gray/900 */

  color: #101828;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 190px;
  }
`;
const H3 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 65px;
  left: 400px;
  top: 180px;
  flex: none;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 53.875px;
  line-height: 65px;
  /* identical to box height, or 120% */

  letter-spacing: -0.02em;

  color: #703f98;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 280px;
  }
`;
const H5 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 65px;
  left: 50px;
  top: 330px;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 53.875px;
  line-height: 65px;
  /* identical to box height, or 120% */

  letter-spacing: -0.02em;

  color: #703f98;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 420px;
  }
`;
const H7 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 65px;
  left: 400px;
  top: 330px;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 53.875px;
  line-height: 65px;
  /* identical to box height, or 120% */

  letter-spacing: -0.02em;

  color: #703f98;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 580px;
  }
`;
const H4 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 26px;
  left: 400px;
  top: 250px;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 16.1625px;
  line-height: 25px;
  /* identical to box height, or 156% */

  /* Gray/900 */

  color: #101828;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 350px;
  }
`;
const H6 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 26px;
  left: 50px;
  top: 410px;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 16.1625px;
  line-height: 25px;
  /* identical to box height, or 156% */

  /* Gray/900 */

  color: #101828;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 490px;
  }
`;
const H8 = styled.div`
  position: absolute;
  width: 237.05px;
  height: 26px;
  left: 400px;
  top: 410px;

  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 16.1625px;
  line-height: 25px;
  /* identical to box height, or 156% */

  /* Gray/900 */

  color: #101828;
  @media only Screen and (max-width: 48em) {
    left: 150px;
    top: 650px;
  }
`;
const L1 = styled.div`
  position: absolute;

  font-family: "Rasputin";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 44px;
  letter-spacing: -0.02em;
  margin-top: -70px;

  color: #101828;

  flex: none;
  order: 1;
`;
const L2 = styled.div`
  position: absolute;

  font-family: "Recoleta";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  text-align: center;

  /* Gray/500 */

  color: #667085;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
  width: 700px;
  @media only Screen and (max-width: 48em) {
    width: 330px;
  }
`;
const L3 = styled.div`
  position: static;
  margin-top: 100px;
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 150% */
  background: #ffffff;
  margin-right: 10px;
  color: #00000;
  padding: 0.8rem 1rem;
  margin-top: 6rem;
  border-style: solid;

  border-width: 2px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

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

  /* Gray/700 */

  /* Inside auto layout */
`;
const L4 = styled.div`
  position: static;
  margin-top: 100px;
  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 150% */
  background: #794b9f;
  color: #ffffff;
  padding: 0.8rem 1rem;
  margin-top: 6rem;
  border-style: solid;

  border-width: 2px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  @media only screen and (max-width: 48em) {
    width: 100%;
    margin-left: 50px;
    font-size: 20px;

    justify-content: center;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  /* Gray/700 */

  /* Inside auto layout */
`;
const Btn = styled.div`
  display: flex;
  justify-contents: space-between;
  font-size: 20px;
  @media only screen and (max-width: 48em) {
    margin-top: 100px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;

  width: 280px;
  height: 300px;
  left: 0px;
  top: 0px;

  /* Gray/50 */

  background: #f9fafb;

  margin: 50px 32px;
  img {
    width: 100px;
    margin-left: 70px;
  }
`;
const Img2 = styled.div`
  position: absolute;

  width: 40px;
  margin-top: 200px;
  display: flex;
  margin-left: -73px;
  margin-top: 220px;
  padding: 5px;
`;
const T1 = styled.div`
  position: static;
  width: 232px;
  height: 28px;
  left: 0px;
  top: 0px;

  font-family: "Recoleta";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-align: center;

  /* Gray/900 */

  color: #101828;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 10px 0px;
`;
const T2 = styled.div`
  position: static;
  width: 232px;
  height: 24px;
  left: 0px;
  top: 28px;

  font-family: "Recoleta";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #c6008e;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;
const T3 = styled.div`
  position: static;
  width: 232px;
  height: 24px;
  left: 0px;
  top: 60px;

  font-family: "Recoleta";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/500 */

  color: #667085;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`;
const Boxt = styled.div`
  display: flex;
  @media only Screen and (max-width: 48em) {
    display: grid;
  }
`;
const Bd4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0px;

  position: static;
  width: 1940px;
  height: 758px;
  left: 0px;
  top: 1999px;
  @media only Screen and (max-width: 48em) {
    position: static;
    width: 414px;
    height: 1500px;
  }

  /* Gray/50 */

  background: #f9fafb;

  /* Inside auto layout */

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
  img {
    position: absolute;

    width: 50px;
    height: auto;
    background: #ffc13c;
    border-radius: 54px;
  }
`;
const B1 = styled.div`
  position: absolute;

  font-family: "Rasputin";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  justify-content: center;

  /* identical to box height, or 150% */
  margin-top: 60px;
  margin-left: -80px;

  text-align: center;

  /* Gray/900 */

  color: #101828;

  /* Inside auto layout */
`;
const B2 = styled.div`
  position: absolute;
  margin-top: 100px;
  width: 380px;
  margin-left: -160px;

  justify-content: center;

  font-family: "Recoleta";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Gray/500 */

  color: #667085;

  /* Inside auto layout */
`;
const Boxx = styled.div``;
const Boxx1 = styled.div`
  margin-top: 100px;
  margin-left: -1350px;
  @media only Screen and (max-width: 48em) {
    margin-top: 100px;

    margin-left: -70px;
  }
`;
const Boxx2 = styled.div`
  margin-left: -28px;
  @media only Screen and (max-width: 48em) {
    margin-top: 200px;
    margin-left: -70px;
  }
`;
const Boxx3 = styled.div`
  margin-left: 1300px;
  @media only Screen and (max-width: 48em) {
    margin-top: 200px;
    margin-left: -70px;
  }
`;
const Boxxx = styled.div``;
const Boxxxx = styled.div`
  @media only Screen and (max-width: 48em) {
    position: absolute;
  }
`;
const Boxx4 = styled.div`
  margin-top: 200px;

  margin-left: 900px;
  @media only Screen and (max-width: 48em) {
    margin-top: 190px;
    margin-left: -70px;
  }
`;
const Boxx5 = styled.div`
  margin-top: 10px;

  margin-left: -450px;
  @media only Screen and (max-width: 48em) {
    margin-left: -70px;
    margin-top: 200px;
  }
`;
const K1 = styled.div`
  position: static;
  width: 768px;
  height: 24px;

  font-family: "Recoleta";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #c6008e;
`;
const K2 = styled.div`
  position: static;
  width: 968px;
  height: 44px;
  left: 0px;
  top: 36px;

  font-family: "Rasputin";
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 54px;
  /* identical to box height, or 122% */

  text-align: center;
  letter-spacing: -0.02em;

  /* Gray/900 */

  color: #101828;
  @media only Screen and (max-width: 48em) {
    width: 300px;
    margin-top: 20px;
  }
`;
const K3 = styled.div`
  position: static;
  width: 768px;
  height: 30px;
  left: 0px;
  top: 100px;

  font-family: "Recoleta";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 50px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/500 */

  color: #667085F;
  @media only Screen and (max-width: 48em) {
    width: 300px;
    margin-top: 90px;
    line-height: 30px;
  }
`;

export default function Landing() {
  return (
    <>
      <Bd>
        <Up>About us</Up>
        <Head>About Fadain Digitals</Head>
        <Down>Learn more about the company and the team behind it.</Down>
      </Bd>
      <Bd2>
        <Img>
          <img src={Pics} alt="cta" />
        </Img>
        <Text>
          <Down2>We’ve helped hundreds of companies</Down2>

          <Head2>We’re only just getting started on our journey</Head2>
          <H1> 50+</H1>
          <H2>Projects completed</H2>
          <H3> 300%</H3>
          <H4>Return on investment</H4>
          <H5> 4.8M</H5>
          <H6>Growth across all Social media accounts </H6>
          <H7> 200+</H7>
          <H8>5-star reviews</H8>
        </Text>
      </Bd2>
      <Bd3>
        <L1>Meet our team </L1>
        <L2>
          Our philosophy is simple — We assemble the best team of diverse,
          passionate individuals and cultivate a culture that encourages you to
          accomplish your best job.
        </L2>
        <Btn>
          <L3> About us</L3>

          <L4>Open position</L4>
        </Btn>
        <Boxt>
          <Box>
            <img src={Work} alt="cta" width="100" height="100" />
            <T1>Kimbery Okonkwo </T1>
            <T2>Founder&ceo</T2>
            <T3>Founder of Fadain Digital</T3>
            <Img2>
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
            </Img2>
          </Box>
          <Box>
            <img src={Work} alt="cta" width="100" height="100" />
            <T1>Kimbery Okonkwo </T1>
            <T2>Founder&ceo</T2>
            <T3>Founder of Fadain Digital</T3>
            <Img2>
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
            </Img2>
          </Box>
          <Box>
            <img src={Work} alt="cta" width="100" height="100" />
            <T1>Kimbery Okonkwo </T1>
            <T2>Founder&ceo</T2>
            <T3>Founder of Fadain Digital</T3>
            <Img2>
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
            </Img2>
          </Box>
          <Box>
            <img src={Work} alt="cta" width="100" height="100" />
            <T1>Kimbery Okonkwo </T1>
            <T2>Founder&ceo</T2>
            <T3>Founder of Fadain Digital</T3>
            <Img2>
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
              <img src={Face} alt="cta" width="100" height="100" />
            </Img2>
          </Box>
        </Boxt>
      </Bd3>
      <Bd4>
        <K1>Our Core Values</K1>
        <K2> How we work at Fadain Digital</K2>
        <K3>Our shared values keep us connected and guide us as one team.</K3>
        <Boxx1>
          <img src={Love} alt="cta" width="10px" height="10px" />

          <B1>Excellect customer service111</B1>
          <B2>
            Understand what matters to our customers. Give them what they need
            to do get the best work.
          </B2>
        </Boxx1>
        <Boxx2>
          <img src={Love} alt="cta" width="10px" height="10px" />

          <B1>Excellect customer service222</B1>
          <B2>
            Understand what matters to our customers. Give them what they need
            to do get the best work.
          </B2>
        </Boxx2>
        <Boxx3>
          <img src={Love} alt="cta" width="10px" height="10px" />

          <B1>Excellect customer service333</B1>
          <B2>
            Understand what matters to our customers. Give them what they need
            to do get the best work.
          </B2>
        </Boxx3>

        <Boxx4>
          <img src={Love} alt="cta" width="10px" height="10px" />

          <B1>Excellect customer service444</B1>
          <B2>
            Understand what matters to our customers. Give them what they need
            to do get the best work.
          </B2>
        </Boxx4>
        <Boxx5>
          <img src={Love} alt="cta" width="10px" height="10px" />

          <B1>Excellect customer service555</B1>
          <B2>
            Understand what matters to our customers. Give them what they need
            to do get the best work.
          </B2>
        </Boxx5>
      </Bd4>
    </>
  );
}
