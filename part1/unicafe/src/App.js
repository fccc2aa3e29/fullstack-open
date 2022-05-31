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

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral

  return (
    <div>
       <h1>Statistics</h1>
      <Display text='Good:' stat={props.good} />
      <Display text='Neutral:' stat={props.neutral} />
      <Display text='Bad:' stat={props.bad} />
      <Display text='All:' stat={all} />
      <Display text='Average:' stat={(props.good - props.bad) / all} />
      <Display text='Positive' stat={props.good / all * 100} />
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
