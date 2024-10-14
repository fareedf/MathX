import React, { useState } from "react";
import "./Quiz.css";
import { data1 } from "../assets/data";

const Quiz = () => {
    const [status, setStatus] = useState({});

    const correct = (index) => {
        setStatus((prev) => {
            const newStatus = {
                ...prev,
                [index]: "Correct!"
            };
            return newStatus;
        });
    };

    const incorrect = (index) => {
        setStatus((prev) => {
            const newStatus = {
                ...prev,
                [index]: "Incorrect, please select another answer."
            };
            return newStatus;
        });
    };

    const checkAnswer = (index, selectedAnswer, correctAnswer) => {
        if (selectedAnswer === correctAnswer) {
            correct(index);
        } else {
            incorrect(index);
        }
    };

    const currentQuestion = data1[0];

    return (
        <div className="qcontainer">
            <h1>Quiz</h1>
            <hr/>
            <h2>{currentQuestion.question}</h2>
            <ul>
                <li onClick={() => checkAnswer(0, 1, currentQuestion.answer)}>
                    {currentQuestion.answer1}
                </li>
                <li onClick={() => checkAnswer(0, 2, currentQuestion.answer)}>
                    {currentQuestion.answer2}
                </li>
                <li onClick={() => checkAnswer(0, 3, currentQuestion.answer)}>
                    {currentQuestion.answer3}
                </li>
                <li onClick={() => checkAnswer(0, 4, currentQuestion.answer)}>
                    {currentQuestion.answer4}
                </li>
                <p><strong>{status[0]}</strong></p>
            </ul>
            <h2>{currentQuestion[1].question}</h2>
            <ul>
                <li onClick={() => checkAnswer(1, 1, 4)}>5</li>
                <li onClick={() => checkAnswer(1, 2, 4)}>3</li>
                <li onClick={() => checkAnswer(1, 3, 4)}>7</li>
                <li onClick={() => checkAnswer(1, 4, 4)}>6</li>
                <p><strong>{status[1]}</strong></p>
            </ul>
            <h2>{currentQuestion[2].question}</h2>
            <ul>
                <li onClick={() => checkAnswer(2, 1, 1)}>8</li>
                <li onClick={() => checkAnswer(2, 2, 1)}>5</li>
                <li onClick={() => checkAnswer(2, 3, 1)}>3</li>
                <li onClick={() => checkAnswer(2, 4, 1)}>12</li>
                <p><strong>{status[2]}</strong></p>
            </ul>
            <h2>{currentQuestion[3].question}</h2>
            <ul>
                <li onClick={() => checkAnswer(3, 1, 2)}>6</li>
                <li onClick={() => checkAnswer(3, 2, 2)}>9</li>
                <p><strong>{status[3]}</strong></p>
            </ul>
            <h2>{currentQuestion[4].question}</h2>
            <ul>
                <li onClick={() => checkAnswer(4, 1, 1)}>3</li>
                <li onClick={() => checkAnswer(4, 2, 1)}>0</li>
                <li onClick={() => checkAnswer(4, 3, 1)}>4</li>
                <li onClick={() => checkAnswer(4, 4, 1)}>6</li>
                <p><strong>{status[4]}</strong></p>
            </ul>
            <button>Submit</button>
            <div className="Number">/5 Questions</div>
        </div>
    );
}

export default Quiz;