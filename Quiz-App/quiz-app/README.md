1. Importing Required Libraries

   import axios from "axios";
   import { useState, useEffect } from "react";
   import "./Quiz.css";
   axios: A library used to make HTTP requests (like fetching data from a server or file).
   useState: A React hook for managing state (variables that React tracks and updates dynamically).
   useEffect: A React hook for performing side effects, like fetching data when a component loads.
   "./Quiz.css": A CSS file imported for styling the component. This is where the visual design for this quiz is defined.

2. Defining the Component

   const Quiz = () => { ... };
   This is a functional React component called Quiz. React components are like building blocks of a React app, and functional components are a common type used to structure UI and behavior.

3. Defining State Variables
   jsx
   Kopiera kod
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [selectedOption, setSelectedOption] = useState("");
   const [score, setScore] = useState(0);
   const [showResult, setShowResult] = useState(false);
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   State variables are special in React because they can store data and trigger updates to the UI when changed. Here's what each one does:

currentQuestion: Tracks which question the user is currently on.

Initial value: 0 (the first question).
Updated using setCurrentQuestion.
selectedOption: Stores the user's selected answer for the current question.

Initial value: an empty string ("").
Updated using setSelectedOption.
score: Tracks the user's total score.

Initial value: 0 (no correct answers yet).
Updated using setScore.
showResult: Determines whether the quiz results should be displayed.

Initial value: false (results are hidden initially).
Updated using setShowResult.
data: Holds the quiz questions and answers fetched from a file or server.

Initial value: an empty array ([]).
Updated using setData.
loading: Tracks whether the app is still fetching data.

Initial value: true (app assumes data is loading at first).
Updated using setLoading.
error: Stores any error message that might occur during data fetching.

Initial value: null (no error initially).
Updated using setError.

4.  Fetching Quiz Data with useEffect

useEffect(() => {
const fetchData = async () => {
try {
const response = await axios.get("../quizData.json");
setData(response.data);
} catch (error) {
setError(error.message);
} finally {
setLoading(false);
}
};
fetchData();
}, []);
Explanation:
useEffect: This runs when the component first loads (because of the empty dependency array []).
fetchData: An asynchronous function to fetch quiz data from a JSON file (../quizData.json).
axios.get: Makes an HTTP GET request to fetch the file.
setData(response.data): Saves the fetched data into the data state.
Error Handling: If fetching fails, the error message is saved in the error state.
Finally: Whether successful or not, setLoading(false) ensures loading is marked as complete.

5. Handling Loading and Errors

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
Before showing the quiz, the app checks:

If loading: Displays "Loading...".
If there's an error: Displays the error message.

6.  Main Quiz Logic
    The main UI and logic are inside the return statement.

(a) When Quiz is Active

<div>
  <h2>{data[currentQuestion].question}</h2>
  <ol>
    {data[currentQuestion].options.map((option, index) => (
      <li key={index}>
        <label>
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          {option}
        </label>
      </li>
    ))}
  </ol>
  <button disabled={!selectedOption} onClick={handleNextQuestion}>
    {currentQuestion === data.length - 1 ? "Finish" : "Next"}
  </button>
</div>
Here’s what’s happening:

Display Current Question: The question from the current data is shown.

Example: data[currentQuestion].question gets the question text.
Options List: The options array for the current question is looped using map. Each option is displayed with a radio button.

Radio Buttons:
Users can select one option.
The checked property ensures only the selected option is highlighted.
The onChange event updates the selectedOption state with the chosen value.
Next/Finish Button:

Disabled: If no option is selected, the button is disabled.
Text: Changes from "Next" to "Finish" on the last question.
Action: Clicking the button calls handleNextQuestion.

(b) When Quiz is Finished

<div className="result">
  <h2>
    Your score: {score} out of {data.length}
  </h2>
  <button onClick={restartQuiz}>Restart Quiz</button>
</div>
Score Display: Shows the user's score out of the total number of questions.
Restart Button: Clicking this resets the quiz by calling restartQuiz.

7. Logic for Handling Button Actions
   (a) Next Question Logic

const handleNextQuestion = () => {
if (selectedOption === data[currentQuestion].answer) {
setScore(score + 1);
}

if (currentQuestion < data.length - 1) {
setCurrentQuestion(currentQuestion + 1);
setSelectedOption("");
} else {
setShowResult(true);
}
};
Checks if the selected answer is correct:
If correct, updates the score using setScore.
Moves to the next question if there are more questions.
If on the last question, displays the results by setting showResult to true.

(b) Restart Quiz

const restartQuiz = () => {
setCurrentQuestion(0);
setScore(0);
setSelectedOption("");
setShowResult(false);
};

Resets everything:

currentQuestion: Back to the first question.
score: Reset to 0.
selectedOption: Cleared.
showResult: Hides the results. 8.

9. How It Works Together
   The component fetches quiz data when it loads.
   The user interacts with questions and selects answers.
   Logic ensures the score is updated and the quiz progresses properly.
   Results are shown at the end, and the user can restart.
