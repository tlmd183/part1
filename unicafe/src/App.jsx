import { useState } from 'react'

const FeedbackHeader = () => <h1>give feedback</h1>
const StatisticsHeader = () => <h1>statistics</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Total = (props) => {
  return (
    <div>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    </div>
  )
}

const App = (props) => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <FeedbackHeader />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <StatisticsHeader />
      <Total good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App