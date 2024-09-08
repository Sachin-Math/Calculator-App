import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "-", "+"];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    try {
      setCalc(eval(calc).toString()); // Replace this part if you want to avoid eval completely.
    } catch (e) {
      setCalc("Error");
    }
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    setCalc(calc.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{calc || "0"}</div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={deleteLast}>del</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
