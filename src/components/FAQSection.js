import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../components/styles/Layouts";
import lines from "../components/img/lines.svg";
import questions from "../questions";
import Question from "./Question";
function FAQSection() {
  return (
    <FaqStyled>
      <InnerLayout>
        <Title>Frequently asked questions</Title>
        <p>Everything you need to know about the product and billing.</p>
        {/* <div className="lines">
                    <img src={lines} alt="" />
                </div> */}

        <div className="questions-con">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </InnerLayout>
    </FaqStyled>
  );
}
const Title = styled.h1`
  color: var(--black);
  display: inline-block;
  font-size: 5rem;
  /* margin-top: 4rem; */
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 40%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
  }
`;

const FaqStyled = styled.section`
  .c-para {
    width: 60%;
    margin: 0 auto;
  }
  .questions-con {
    padding-top: 4rem;
  }
  .lines {
    position: absolute;
    left: 0;
    top: 300%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
    }
  }
`;

export default FAQSection;
