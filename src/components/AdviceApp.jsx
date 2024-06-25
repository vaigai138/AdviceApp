import React, { useState } from 'react'

export const AdviceApp = () => {
  const [advice,setAdvice]=useState("Click 'Get Advice' to read an Advice !");
  const [count,setCount]=useState(0);

  async function clickHandle(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount(count+1)

  }
  return (
    <div>
        <h3 >{advice}</h3>
        <button onClick={clickHandle}>Get Advice</button>
        <p>You have read <b>{count}</b> pieces of Advice.</p>
    </div>
  )
}
