import React from "react";
import styled from "styled-components";
import { InnerLayout } from "./styles/Layouts";
import Card from "./Card";
import card from "../components/img/creditcard.svg";
import active from "../components/img/active.svg";
import inactive from "../components/img/inactive.svg";
import check from "../components/img/check.svg";
import checkDisabled from "../components/img/check-disabled.svg";
import FAQSection from "../components/FAQSection";
import Faq from "../assets/Image.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../components/styles/tailwind.css";

const MobileSvg = styled.img`
  width: 30%;
  margin-left: 20px;
  height: 500px;
  max-width: 700px;
  margin-top: 14rem;
  margin-right: 15rem;

  z-index: 7;

  @media only Screen and (max-width: 48em) {
    opacity: 0;
    bottom: 0;
    width: 100%;
    margin: 0;
  }
`;
const CTA = styled.button`
  align-items: center;
  padding: 8.90648px 16.0317px;
  margin-right: 360px;

  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #703f98;
  border: 0.890648px solid #703f98;
  box-sizing: border-box;
  box-shadow: 0px 0.890648px 1.7813px rgba(16, 24, 40, 0.05);
  border-radius: 7.12518px;
  font-family: Recoleta;
  font-style: normal;
  font-weight: 600;
  font-size: 14.2504px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* White */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

function PaymentSection() {
  return (
    <PaymentStyled>
      <div className="main">
        <h1 className="smallheading">Plans to suit your needs</h1>
        <h1 className="para">
          Simple, transparent pricing that grows with you.{" "}
        </h1>
        <h1 className="paraa">
          Annual pricing <span>(save 20%)</span>
        </h1>
      </div>
      <InnerLayout>
        <div className="card-con">
          <Card
            account={"Basic Plan"}
            amount={"N220,000"}
            text={"Billed annually."}
            check={check}
            checkDis={checkDisabled}
            text1={"Graphic design"}
            text2={"Social media Ads"}
            text3={"Social media Engagement"}
            text4={"Writing"}
            text5={"Blogging and Social media consultation"}
            button={"Get Started"}
          />

          <Card
            account={"Business plan"}
            amount={"N120,000"}
            text={"Billed annually."}
            check={check}
            checkDis={checkDisabled}
            text1={"Canva template"}
            text2={"Social media Ads"}
            text3={"Social media Engagement"}
            text4={"Book writng and publishing"}
            button={"Get Started"}
          />
          <Card
            account={"Enterprise plan"}
            amount={"N95,000"}
            text={"Billed annually."}
            check={check}
            checkDis={checkDisabled}
            text1={"Social media Ads"}
            text2={"Graphic design"}
            text3={"Writing"}
            button={"Get Started"}
          />
        </div>
      </InnerLayout>
      <div className="faq">
        <FAQSection />
        <MobileSvg
          src={Faq}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
        />
      </div>
      <div className="space">
        <h1>
          {/* ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................... */}
        </h1>
      </div>
      <div className="news">
        <h1>Join our newsletter</h1>
      </div>
      <div className="sec">
        <h2>We’ll send you a nice letter once per week. No spam.</h2>
      </div>
      <div className="same"></div>
      <div className="input">
        <input type="text" placeholder="Enter your email" className="inpu" />
        <CTA>Subscribe</CTA>
      </div>
      <div className="space">
        <h1>
          {/* ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................... */}
        </h1>
      </div>
    </PaymentStyled>
  );
}

const PaymentStyled = styled.section`
  background: #ffffff;

  .card-con {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: 0 auto;
    background: white;
    max-width: 1300px;
    grid-gap: 3rem;
    @media screen and (max-width: 689px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .c-para {
    text-align: center;
  }
  .smallheading {
    text-align: center;
    font-family: Rasputin;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 53px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #42307d;
  }

  .para {
    font-family: Recoleta;
    font-size: 18px;
    margin: 15px 0px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #d850b1;
  }
  .paraa {
    color: #42307d;
    span {
      color: #d850b1;
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 85.5022px 0px;

    /* Primary/50 */

    background: #f9f5ff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
  }
  .faq {
    display: flex;
    justify-content: space-between;
    margin-left: 13rem;
    @media only Screen and (max-width: 48em) {
      width: 80%;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      margin-top: calc(2.5rem + 2.5vw);
    }
  }
  .news {
    width: 692.92px;
    height: 27px;
    left: 0px;
    top: 0px;

    font-family: Recoleta;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 27px;
    /* identical to box height, or 150% */

    /* Gray/900 */

    color: #101828;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 2px 100px;
  }
  .sec {
    width: 692.92px;
    height: 22px;
    left: 0px;
    top: 34.13px;

    font-family: Rasputin;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    /* identical to box height, or 150% */

    /* Gray/500 */

    color: #667085;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 7px 100px;
    @media only Screen and (max-width: 48em) {
      position: static;
      width: 358px;
      height: 48px;
      left: 100px;
      top: 36px;

      font-family: Rasputin;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      /* Gray/500 */

      color: #667085;

      /* Inside auto layout */

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      margin: 12px 40px;
    }
  }
  .inpu {
    flex-direction: row;
    align-items: center;
    padding: 20px 20px;
    margin-left: 1200px;

    width: 249.38px;
    height: 39.81px;
    left: 0px;
    top: 1000px;
    font-family: Rasputin;
    font-style: normal;
    font-weight: normal;
    font-size: 14.2504px;
    line-height: 21px;
    /* identical to box height, or 150% */

    /* Gray/500 */

    color: #667085;

    /* White */

    background: #ffffff;
    /* Gray/300 */

    border: 0.890648px solid #d0d5dd;
    box-sizing: border-box;
    box-shadow: 0px 0.890648px 1.7813px rgba(16, 24, 40, 0.05);
    border-radius: 7.12518px;

    /* Inside auto layout */
  }
  .input {
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
    margin-right: -40px;
    @media only Screen and (max-width: 48em) {
      width: 80%;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      margin-left: -380px;
      margin-top: 10px;
    }
  }
`;
export default PaymentSection;
