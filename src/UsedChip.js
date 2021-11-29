import React from 'react'

const UsedChip = (props) => {
  // filter: "grayscale(1)"
  return (
    <div className="column centered is-6 has-background-grey" style={{ textAlign: "center", border: "solid", borderWidth: "thin" }}>
      <p className="title">{props.chip.name}</p>
      <p>{props.chip.type} attack by {props.chip.boost}.</p>
      <p>Discard {props.chip.cost} chip(s) to use.</p>
    </div>
  )
}

export default UsedChip
