import "./styles.css";
import { useState } from "react";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    function handleStepMinus() {
        setStep((prevStep) => (prevStep -= 1));
    }

    function handleStepAdd() {
        setStep((prevStep) => (prevStep += 1));
    }

    function handleCountMinus() {
        setCount((prevCount) => prevCount - step);
    }

    function handleCountAdd() {
        setCount((prevCount) => prevCount + step);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div>
            <div>
                <button onClick={handleStepMinus}>-</button>
                <span>Step: {step}</span>
                <button onClick={handleStepAdd}>+</button>
            </div>
            <div>
                <button onClick={handleCountMinus}>-</button>
                <span>Count: {count}</span>
                <button onClick={handleCountAdd}>+</button>
            </div>
            <p>
                {count < 0
                    ? `${Math.abs(count)} days ago was ${date.toDateString()}.`
                    : count > 0
                    ? `${count} days from today is ${date.toDateString()}.`
                    : `Today is ${date.toDateString()}.`}
            </p>
        </div>
    );
}
