import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "./Button";
import { getStoreItemArray } from "../../src/reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  return (
    <Wrapper>
      <Top>
        <Title>Uncle Tito's</Title>
        <Subtitle>Cool things</Subtitle>
        <ItemList>Things</ItemList>
      </Top>
      {storeItems.map((item) => (
        <CartItem item={item} key={item.id} id={item.id} />
      ))}
      <Bottom>
        <Total>This is where price shows up</Total>
        <Button>Fancy ass button</Button>
      </Bottom>
    </Wrapper>
  );
};

export default Cart;

const Top = styled.div`
  justify-content: center;
  padding-left: 3vh;
`;

const Title = styled.h2``;

const Subtitle = styled.p``;

const ItemList = styled.ul``;

const Total = styled.div``;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  min-width: 300px;
  height: 100vh;
  background: #401f43;
  color: white;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Bottom = styled.div``;
