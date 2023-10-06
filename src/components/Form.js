import { useState } from 'react'

function Form ({getData}) {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [alert,setAlert] = useState(false)
  const onSubmit = e => {
    e.preventDefault();
    isNaN(weight) || isNaN(height)
      ? setAlert(true)
      : getData(weight, height);
    setAlert(false);
    setWeight('')
    setHeight('')
  }
  
  return (
    <div>
      <form className='form' id='form' onSubmit={onSubmit}>
        <div className='row-two'>
          <input
            type='text'
            value={height}
            onChange={e => setHeight(e.target.value)}
            className='text-input'
            id='height'
            autoComplete='off'
            required
          />
          <p className='text'>Height (cm)</p>
          <input
            type='text'
            value={weight}
            onChange={e => setWeight(e.target.value)}
            className='text-input'
            id='weight'
            autoComplete='off'
            required
          />
          <p className='text'>Weight (kg)</p>
        </div>
        <button type='submit' id='submit'>
          Get BMI
        </button>
      {alert&&<div className='alert alert-danger' role='alert'>Plz enter a valid number..</div>}
      </form>
    </div>
  )
}

export default Form
