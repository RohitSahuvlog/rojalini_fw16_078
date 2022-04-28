import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import styled from "styled-components";
import { useState } from "react";

const AppDiv = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 100px;
`;

function App() {
  const [userName, setUserName] = useState("Card holder");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YY");
  const [cvc, setCvc] = useState("___");

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleCvc = (e) => {
    setCvc(e.target.value);
  };
  return (
    <AppDiv>
      <Card
        userName={userName}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      <Form
        handleName={handleName}
        handleNumber={handleNumber}
        handleMonth={handleMonth}
        handleYear={handleYear}
        handleCvc={handleCvc}
      />
    </AppDiv>
  );
}

export default App;
