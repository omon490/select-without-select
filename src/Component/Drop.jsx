import React, {useState} from 'react'
import './Drop.css'

export default function Drop () {

  const [open, setOpen] = useState(true)

  const [nima, setNima] = useState('Mercedes')

  // const sideDiv = useRef()


  return (

    <>

    <div className="title">Choose the car</div>

    <div className="big-wrapper">
      <div className="wrapper">
        <h1 className="select">{nima}</h1>
        <button className="button" onClick={() => setOpen(!open)}></button>
      </div>

      <div className={open ? "model first open" : "model first"}>
        <h3 className="heading" onClick={(evt) => setNima(evt.target.textContent)}>Mercedes</h3>
      </div>

      <div className={open ? "model second open" : "model second"}>
        <h3 className="heading" onClick={(evt) => setNima(evt.target.textContent)}>Bentley</h3>
      </div>

      <div className={open ? "model third open" : "model third"}>
        <h3 className="heading" onClick={(evt) => setNima(evt.target.textContent)}>Rolls royce</h3>
      </div>

    </div>

    </>

    )
  }