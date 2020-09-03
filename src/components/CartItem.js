import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../src/reducers";

const CartItem = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  return (
    <Wrapper>
      {storeItems.map((i) => {
        return (
          <>
            <Head>
              <h3>{i.title}</h3>
              <button>x</button>
            </Head>
            <Bottom>
              <span>Quantity:</span>
              <input value="#"></input>
            </Bottom>
          </>
        );
      })}
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  border: 0.5px white dashed;
  margin: 20px;
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
