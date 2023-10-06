function BmiList ({ range, bmi }) {
  console.log(range)
  return (
    <div>
      <section className='intro'>
        <div className='container1'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <div className='card bg-dark shadow-2-strong'>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table table-dark table-borderless mb-0'>
                      <thead>
                        <tr>
                          <th scope='col'>TYPE</th>
                          <th scope='col'>BMI</th>
                          <th scope='col'>WEIGHT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='table-bordered red-border'>
                          <th scope='row'>Underweight</th>
                          <td>&lt; 18.5</td>
                          <td>&lt;{range.underWeigtht.low + ' kg'}</td>
                        </tr>
                        <tr className='table-bordered red-border'>
                          <th scope='row'>Normal</th>
                          <td> 18.5-24.9</td>
                          <td>
                            {range.normal.low +
                              ' kg - ' +
                              range.normal.high +
                              ' kg'}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>Over weight</th>
                          <td> 25-29.9</td>
                          <td>
                            {range.overWeight.low +
                              ' kg - ' +
                              range.overWeight.high +
                              ' kg'}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>Obesity Class I</th>
                          <td> 30-34.9</td>
                          <td>
                            {range.obesity1.low +
                              ' kg - ' +
                              range.obesity1.high +
                              ' kg'}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>Obesity Class II</th>
                          <td> 35-39.9</td>
                          <td>
                            {range.obesity2.low +
                              ' kg - ' +
                              range.obesity2.high +
                              ' kg'}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>Obesity Class III</th>
                          <td>&gt; 39.9</td>
                          <td>&gt; {range.obesity3.high + ' kg'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BmiList
