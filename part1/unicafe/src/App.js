import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral

  if (all === 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given.</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='Good:' value={props.good} />
          <StatisticLine text='Neutral:' value={props.neutral} />
          <StatisticLine text='Bad:' value={props.bad} />
          <StatisticLine text='All:' value={all} />
          <StatisticLine text='Average:' value={(props.good - props.bad) / all} />
          <StatisticLine text='Positive' value={String(props.good / all * 100) + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App;
