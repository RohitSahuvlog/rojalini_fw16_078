import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 45%;
  align-self: center;
  background-color: #f6425b;
  border-radius: 20px;
  box-sizing: border-box;
  color: #fcfdfd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  > div {
    height: 45px;
    box-sizing: border-box;
  }
  h3 {
    text-align: right;
  }

  > div:last-child {
    display: flex;
    gap: 50px;
  }
  > div:last-child p:first-child {
    font-size: 8px;
    margin-bottom: -13px;
  }
`;

const Card = ({ userName, cardNumber, month, year, cvc }) => {
  return (
    <Wrapper>
      <div>
        <h3>VISA</h3>
      </div>
      <div>
        <img
          src="https://www.svgrepo.com/show/356961/sim-card-chip.svg"
          alt="chip"
        />
      </div>
      <div>
        <p>{cardNumber}</p>
      </div>
      <div>
        <div>
          <p>CARD HOLDER NAME</p>
          <p>{userName}</p>
        </div>
        <div>
          <p>EXPIRES</p>
          <p>{month}/{year}</p>
        </div>
        <div>
          <p>CVC</p>
          <p>{cvc}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
