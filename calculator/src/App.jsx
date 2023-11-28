import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [scase, setScase] = useState("");

  useEffect(() => {
    calculate();
  }, [scase, number1, number2]);

  const calculate = () => {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Error: Bir ədəd yazın");
      return;
    }

    switch (scase) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "/":
        if (num2 === 0) {
          setResult("Error: 0-a bölmək olmur");
        } else {
          setResult(num1 / num2);
        }
        break;
      case "*":
        setResult(num1 * num2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="text"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button onClick={() => setScase("+")}>+</button>
      <button onClick={() => setScase("-")}>-</button>
      <button onClick={() => setScase("/")}>/</button>
      <button onClick={() => setScase("*")}>*</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
