import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "";

const CartItem = () => {
  return (
    <Wrapper>
      <Head>The thing you bought</Head>
      <Body></Body>
      <Bottom></Bottom>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  border: 0.5px white dashed;
  margin-bottom: 5vh;
`;

const Head = styled.h4``;

const Body = styled.p``;

const Bottom = styled.div``;
