import React, { useState } from "react";
import './App.css'

export default function BMICalculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    function calculateBMI(e) {
        e.preventDefault();

    if (!weight || !height) {
        swal({
            title: "Error",
            text: "Fill the Data properly",
            icon: "warning"
        });
        return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    const result = w / (h * h);

    setBmi(result.toFixed(2));

    if (result < 18.5) setCategory("Underweight");
    else if (result < 25) setCategory("Normal");
    else if (result < 30) setCategory("Overweight");
    else setCategory("Obese");
    }

    return (
    <div className="container">
        <div className="calculator">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
            <div className="form-group">
            <label>Weight (kg)</label>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
            />
            </div>
            <div className="form-group">
            <label>Height (cm)</label>
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
            />
            </div>
            <button type="submit">Calculate</button>
        </form>

        {bmi && (
            <div className="result">
            <p>
                Your BMI: <strong>{bmi}</strong>
            </p>
            <p>
                Category: <strong>{category}</strong>
            </p>
            </div>
        )}
        </div>
    </div>
    );
};