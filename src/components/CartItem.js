import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getStoreItemArray } from "../../src/reducers";
import { removeItem } from "../actions";

const CartItem = ({ item, id }) => {
  const storeItems = useSelector(getStoreItemArray);
  const dispatch = useDispatch();
  console.log(storeItems);
  return (
    <Wrapper>
      <Head>
        <h3>{item.title}</h3>
        <button onClick={() => dispatch(removeItem({ id }))}>x</button>
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
  margin: 0px 20px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  background-color: teal;
  height: 25px;
  input {
    height: 25px;
    width: 25px;
  }
`;
