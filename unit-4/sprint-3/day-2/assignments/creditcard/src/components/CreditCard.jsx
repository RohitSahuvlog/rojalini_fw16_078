import React, { useState } from "react";
import styled from "styled-components";
import Cards from "react-credit-cards";

const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, SetExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  return <div>CreditCard</div>;
};

export default CreditCard;
