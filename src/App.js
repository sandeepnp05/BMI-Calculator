import './App.css'
import BmiScore from './components/BmiScore'
import Form from './components/Form'
import BmiList from './components/BmiList'
import { useState } from 'react'

function App () {
  const [show,setShow] = useState(false)
  const [changeWeight,setChangeWeight] = useState({weight:'',type:''});
  const [bmi, setBmi] = useState('')
  const [bmiType, setType] = useState('')
  const [bmiRange,setBmiRange]= useState({
    underWeigtht:{low:''},
    normal:{low:'',high:''},
    overWeight:{low:'',high:''},
    obesity1:{low:'',high:''},
    obesity2:{low:'',high:''},
    obesity3:{high:''},
  })
  const onFormSub = (w, h) => {
    let b = calBmi(w, h)
    setBmi(b)
  
    setType(weightType(b))
    const range ={
      underWeigtht:{low:calWeight(18.5,h)},
      normal:{low:calWeight(18.5,h),high:calWeight(24.9,h)},
      overWeight:{low:calWeight(25,h),high:calWeight(29.9,h)},
      obesity1:{low:calWeight(30,h),high:calWeight(34.9,h)},
      obesity2:{low:calWeight(35,h),high:calWeight(39.9,h)},
      obesity3:{high:calWeight(39.9,h)},
      
    }
    setBmiRange(range)
    setChangeWeight(weightChange(b,w,range))
    setShow(true)
  }
  const calBmi = (w, h) => parseFloat((w / (h / 100) ** 2).toFixed(2))

  const calWeight = (b, h) => parseFloat(((b * h * h) / 10000).toFixed(2));

  const weightChange = (b,w,range)=>{
    let changeObj;
    if (b>24.9) {
      changeObj={
        weight:(w - range.normal.high).toFixed(2),
        type: 'positive'
      }
      return changeObj
    }else if (b<18.5) {
      changeObj={
        weight:( range.normal.low-w).toFixed(2),
        type: 'negative'
      }
      return changeObj

    }else{
      changeObj={
        weight:0,
        type :'normal'
      }
      return changeObj

    }
  }


  const weightType =(bmi) =>{
    if (bmi<18.5) {
      return 'Underweight';
    }else if (18.5<bmi && bmi<24.9) {
      return 'Normal'
    }else if (24.9<bmi && bmi <29.9) {
      return 'Over weight'
    }else if (29.9<bmi && bmi <34.9) {
      return 'Obesity class I'
    }else if (34.9<bmi && bmi <39.9){
      return 'Obesity class II'
    }else if (bmi > 39.9){
      return 'Obesity clss III'
    }
  }

  return (
    <>
      <h1>BMI calculator</h1>
      <Form getData={onFormSub} />
      {show&&(
        <>
      <BmiScore bmiNo={bmi} bmiName={bmiType} changeWeight={changeWeight} />
      <BmiList range={bmiRange} bmi={bmi} />
      </>
      )}
    </>
  )
}

export default App
