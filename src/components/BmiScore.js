function BmiScore ({bmiName,bmiNo,changeWeight}) {
  console.log(changeWeight);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '46vh'
      }}
    >
      <div
        className='card text-white bg-dark mb-3'
        style={{ width: '28rem', height: '300px' }}
      >
        <div className='card-body'>
          <h5 className='card-title'>Your Bmi Score</h5>
          <p className='card-text' style={{ color: 'white' }}>
           {bmiNo}
          </p>
          <p className='card-text' style={{ color: 'white' }}>
           {bmiName}
          </p>
           {changeWeight.type === 'positive'&& (
           <div className="fw-bold" style={{ color: 'white' }}>"You need lose" <span className="fw-bold" style={{ color: 'white' }}>{changeWeight.weight}kg</span></div>
           )}
           {changeWeight.type === 'negative'&& (
           <div className="fw-bold" style={{ color: 'white' }}>"You need gain" <span className="fw-bold" style={{ color: 'white' }}>{changeWeight.weight}kg</span></div>
           )}
           {changeWeight.type === 'normal'&& (
           <div className="fw-bold" style={{ color: 'white' }}>"You are weight is normal, good for you"</div>
           )}
        </div>
      </div>
    </div>
  )
}

export default BmiScore
