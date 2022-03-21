import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pics from "../assets/con1.png";

const Bd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: auto;
  height: auto;
  left: 0px;
  top: 100.03px;

  /* White */

  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
  @media only Screen and (max-width: 48em) {
    margin-left: -1250px;
  }
  img {
    position: static;
    width: 998.5px;
    height: 1577.99px;
    left: calc(50% - 598.5px / 2 - 299.25px);
    @media only Screen and (max-width: 48em) {
      opacity: 0;
    }
  }
`;
const H1 = styled.div`
  position: absolute;
  width: 475.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 100px;

  font-family: "Rasputin";
  font-style: normal;
  font-weight: 500px;
  font-size: 59.8998px;
  line-height: 50px;
  /* or 125% */

  letter-spacing: -0.02em;
  @media only Screen and (max-width: 48em) {
    width: 375.6px;
    margin-left: 1270px;
    font-size: 53px;

    margin-top: 30px;

    line-height: 60px;
  }
`;
const H2 = styled.div`
  position: absolute;
  width: 375.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 330px;

  font-family: "Rasputin";
  font-style: normal;
  font-size: 20.8998px;
  line-height: 25px;
  /* or 125% */

  letter-spacing: -0.02em;
  span {
    color: #7d2899;
  }
  @media only Screen and (max-width: 48em) {
    margin-left: 1270px;
    margin-top: 340px;
  }
`;
const I1 = styled.div`
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 460px;
  input {
    width: 460px;
    border-radius: 6.64997px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    border: 0.831246px solid #d0d5dd;
    @media only Screen and (max-width: 48em) {
      width: 360px;
    }
  }
  @media only Screen and (max-width: 48em) {
    margin-left: 1280px;
  }
`;
const I2 = styled.div`
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 560px;
  input {
    width: 460px;
    border-radius: 6.64997px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    border: 0.831246px solid #d0d5dd;
    @media only Screen and (max-width: 48em) {
      width: 360px;
    }
  }
  @media only Screen and (max-width: 48em) {
    margin-left: 1280px;
  }
`;
const I3 = styled.div`
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 660px;
  input {
    width: 460px;
    border-radius: 6.64997px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    border: 0.831246px solid #d0d5dd;
    @media only Screen and (max-width: 48em) {
      width: 360px;
    }
  }
  @media only Screen and (max-width: 48em) {
    margin-left: 1280px;
  }
`;
const I4 = styled.div`
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 760px;
  textarea {
    width: 460px;
    border-radius: 6.64997px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    border: 0.831246px solid #d0d5dd;
    @media only Screen and (max-width: 48em) {
      width: 360px;
    }
  }
  @media only Screen and (max-width: 48em) {
    margin-left: 1280px;
  }
`;
const I5 = styled.div`
  display: flex;
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 1060px;
  h1 {
    margin-left: 10px;
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 600;
    font-size: 15.2999px;
    line-height: 20px;
  }
  @media only screen and (max-width: 48em) {
    margin-left: 1280px;
  }
`;
const I6 = styled.div`
  display: flex;
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1500px;
  margin-top: 1060px;
  h1 {
    margin-left: 10px;
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 600;
    font-size: 15.2999px;
    line-height: 20px;
  }
  @media only screen and (max-width: 48em) {
    margin-left: 1480px;
  }
`;
const I7 = styled.div`
  display: flex;
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1500px;
  margin-top: 1110px;
  h1 {
    margin-left: 10px;
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 600;
    font-size: 15.2999px;
    line-height: 20px;
  }
  @media only screen and (max-width: 48em) {
    margin-left: 1480px;
  }
`;
const I9 = styled.div`
  display: flex;
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 1110px;
  h1 {
    margin-left: 10px;
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 600;
    font-size: 15.2999px;
    line-height: 20px;
  }
  @media only screen and (max-width: 48em) {
    margin-left: 1280px;
  }
`;
const I8 = styled.div`
  display: flex;
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1500px;
  margin-top: 1160px;
  h1 {
    margin-left: 10px;
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 600;
    font-size: 15.2999px;
    line-height: 20px;
  }
  @media only screen and (max-width: 48em) {
    margin-left: 1480px;
  }
`;
const I10 = styled.div`
  display: flex;
  position: absolute;
  width: 1075.6px;
  height: 200px;
  margin-left: 1250px;
  margin-top: 1160px;
  h1 {
    margin-left: 10px;
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 600;
    font-size: 15.2999px;
    line-height: 20px;
  }
  @media only screen and (max-width: 48em) {
    margin-left: 1280px;
  }
`;
const CTA = styled.button`
  position: absolute;

  margin-left: 1250px;
  margin-top: 1220px;
  background: #7d2899;
  color: #ffff;
  width: 490px;
  height: 50px;
  padding: 1rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.8rem + 0.8vw);
  font-weight: 400;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  @media only screen and (max-width: 48em) {
    padding: 0.8rem 0rem;
    width: 290px;
    justify-content: center;
    margin-left: 1300px;
  }
  h1 {
    @media only screen and (max-width: 48em) {
      margin-left: -80px;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
export default function Contact() {
  return (
    <>
      <Bd>
        <img src={Pics} alt="cta" width="10px" height="10px" />

        <H1>
          Together, let's catapult your brand and business to the next level.
        </H1>
        <H2>
          You can reach us anytime via <span>Fadain2018@gmail.com</span> or on
          our social media handles (linked below)
        </H2>
        <I1>
          <h1>Name</h1>

          <input name="email" type="email" placeholder="Your name" />
        </I1>
        <I2>
          <h1>Email</h1>

          <input name="email" type="email" placeholder="Your email" />
        </I2>
        <I3>
          <h1>Phone number</h1>

          <input name="email" type="email" placeholder="Your number" />
        </I3>
        <I4>
          <h1>How can we help?</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Tell us a little about the project..."
          ></textarea>
        </I4>
        <I5>
          <input type="checkbox" />
          <h1>Website design</h1>
        </I5>
        <I6>
          <input type="checkbox" />
          <h1>Content creation</h1>
        </I6>
        <I7>
          <input type="checkbox" />
          <h1>Strategy & consulting</h1>
        </I7>
        <I9>
          <input type="checkbox" />
          <h1>Branding</h1>
        </I9>
        <I8>
          <input type="checkbox" />
          <h1>Other</h1>
        </I8>
        <I10>
          <input type="checkbox" />
          <h1>Graphic design</h1>
        </I10>
        <CTA>
          <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get
            started
          </h1>{" "}
        </CTA>
      </Bd>
    </>
  );
}
