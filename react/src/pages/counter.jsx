import { useState } from "react";
export default function Home() {
  const [number, setNumber] = useState(0);

  const handleButton = (text) => {
    setNumber(number + 1);
    console.log("button darlaa", " ", "number");
  };
  const handleButtonTwo = () => {
    setNumber(number - 1);
    console.log("button darlaa");
  };
  return (
    <>
      <h1>{number}</h1>
      {/* argument damjulsan */}
      <button onClick={() => handleButton("hello")}>Nemeh</button>
      {/* argument damjulaagui */}
      <button onClick={handleButtonTwo}>Hasah</button>
    </>
  );
}
