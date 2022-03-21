import React from "react";
import styled from "styled-components";

function Card({
  account,
  amount,
  text,
  button,
  card,
  active,
  inactive,
  check,
  checkDis,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) {
  return (
    <CardStyled>
      <h4 className="card-title">{account}</h4>
      <h4 className="card-title">
        {amount} <span>/ mth</span>
      </h4>
      <p className="c-para">{text}</p>

      <div className="card-image-con">
        <img src={card} alt="" />
      </div>
      <div className="plan-con">
        <img src={active} alt="" />
        <img src={inactive} alt="" />
      </div>
      <div className="list-con">
        <p className="text-check">
          <img src={check} alt="" />
          {text1}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text2}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text3}
        </p>
        {text4 && (
          <p className="text-check">
            <img src={check} alt="" />
            {text4}
          </p>
        )}
        {text5 && (
          <p className="text-check">
            <img src={check} alt="" />
            {text5}
          </p>
        )}
        <div className="button-con">
          <button>{button}</button>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: white;
  padding: 3rem 4rem;
  border-radius: 25px;
  height: fit-content;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  .card-title {
    font-size: 2.5rem;
    color: #000;
    text-align: center;
    padding: 1.5rem 0;
    span {
      font-size: 1.5rem;
    }
  }

  .button-con {
    text-align: center;
    padding: 1.5rem 0;
    width: 100%;
    button {
      padding: 0.8rem 1.8rem;
      outline: none;
      width: 100%;
      cursor: pointer;
      background: #703f98;
      border-radius: 8px;
      font-size: inherit;
      color: #ffffff;
    }
  }

  .card-image-con {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
    }
  }

  .plan-con {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    img {
      padding: 0 0.3rem;
    }
  }

  .text-check {
    display: flex;
    align-items: center;
    padding: 0.4rem 0;
    img {
      padding-right: 0.3rem;
      width: 24px;
    }

    &:nth-child(6) {
      color: #b7b7b7;
    }
    &:nth-child(7) {
      color: #b7b7b7;
    }
    &:nth-child(8) {
      color: #b7b7b7;
    }
  }
`;
export default Card;
