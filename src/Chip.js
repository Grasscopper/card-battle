import React from 'react'

const Chip = (props) => {
  const handleChip = (event) => {
    event.preventDefault()
    props.sendChip(props.chip)
  }

  const handleDiscard = (event) => {
    event.preventDefault()
    props.sendDiscard(props.chip)
  }

  let chip =
  <div onClick={handleChip} className="column centered is-6 has-background-primary" style={{ textAlign: "center", border: "solid", borderWidth: "thin" }}>
    <p className="title">{props.chip.name}</p>
    <p>{props.chip.type} attack by {props.chip.boost}.</p>
    <p>Discard {props.chip.cost} chip(s) to use.</p>
  </div>

  if (props.chipUsage.deleting) {
    chip =
    <div onClick={handleDiscard} className="column centered is-6 has-background-danger" style={{ textAlign: "center", border: "solid", borderWidth: "thin" }}>
      <p className="title">{props.chip.name}</p>
      <p>{props.chip.type} attack by {props.chip.boost}.</p>
      <p>Discard {props.chip.cost} chip(s) to use.</p>
    </div>
  }

  return (
    <>{chip}</>
  )
}

export default Chip
