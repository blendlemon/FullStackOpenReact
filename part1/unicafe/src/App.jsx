import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({ good, neutral, bad, allClicks }) => {
  const all = allClicks;
  let average = (good - bad) / all;

  if (all === 0) {
    return (
      <p>No feedback given</p>
    );
  }
  
  average = average.toFixed(2);
  let positive = (good / all) * 100;
  positive = String(positive.toFixed(2));
  positive = positive + "%";
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"average"} value={average} />
          <StatisticLine text={"positive"} value={positive} />
        </tbody>
      </table>
    </div>
  )

}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0);

  const handleGood = () => {
    setAll(allClicks + 1);
    setGood(good + 1);
  }
  const handleNeutral = () => {
    setAll(allClicks + 1);
    setNeutral(neutral + 1);
  }
  const handleBad = () => {
    setAll(allClicks + 1);
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text={"good"}></Button>
      <Button handleClick={handleNeutral} text={"neutral"}></Button>
      <Button handleClick={handleBad} text={"bad"}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App