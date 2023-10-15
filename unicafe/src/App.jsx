import { useState } from 'react'

const FeedbackHeader = () => <h1>give feedback</h1>
const StatisticsHeader = () => <h1>statistics</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <p>{props.statistic} {props.value}</p>
  )
}

const Total = (props) => {
  if (props.sum === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
      <table>
        <tbody>
          <tr>
            <td> <StatisticsLine statistic="good" /> </td>
            <td> <StatisticsLine value={props.good} /> </td>   
          </tr>
          <tr>
            <td> <StatisticsLine statistic="neutral" /> </td>
            <td> <StatisticsLine value={props.neutral} /> </td>
          </tr>
          <tr>
            <td> <StatisticsLine statistic="bad" /> </td>
            <td> <StatisticsLine value={props.bad} /> </td>
          </tr>
          <tr>
            <td> <StatisticsLine statistic="all" /> </td>
            <td> <StatisticsLine value={props.sum} /> </td>
          </tr>
          <tr>
            <td> <StatisticsLine statistic="average" /> </td>
            <td> <StatisticsLine value={props.average} /> </td>
          </tr>
          <tr>
            <td> <StatisticsLine statistic="positive" /> </td>
            <td> <StatisticsLine value={props.positive} /> </td>
          </tr>
        </tbody>
      </table>
  )
}

const App = (props) => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = good+neutral+bad 
  const average = (good-bad)/sum
  const positive =  good/sum

  return (
    <div>
      <FeedbackHeader />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <StatisticsHeader />
      <Total good={good} neutral={neutral} bad={bad} sum={sum}average={average} positive={positive} />
    </div>
  )
}

export default App