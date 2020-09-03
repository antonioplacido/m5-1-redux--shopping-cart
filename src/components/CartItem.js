import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";

const CartItem = () => {
  return (
    <Wrapper>
      <Head>
        <h4>The thing you bought</h4>
        <button>x</button>
      </Head>
      <Bottom>
        <span>Quantity:</span>
        <input value="#"></input>
      </Bottom>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  border: 0.5px white dashed;
  margin: 20px;
`;

const Head = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  background-color: teal;
  input {
    height: 25px;
    width: 25px;
  }
`;
