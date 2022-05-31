import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <p>{props.text} {props.stat}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />

      <h1>Statistics</h1>
      <Display text='Good:' stat={good} />
      <Display text='Neutral:' stat={neutral} />
      <Display text='Bad:' stat={bad} />
      <Display text='All:' stat={all} />
      <Display text='Average:' stat={(good - bad) / all} />
      <Display text='Positive' stat={good / all * 100} />
    </div>
  )
}
export default App;
