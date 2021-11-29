import React from 'react'
import Card from './Card'
import Ability from './Ability'
import Ability2 from './Ability2'
import Chip from './Chip'
import UsedChip from './UsedChip'

const Battle = (props) => {
  const sendChip = (receivedChip) => {
    props.moves.chip(receivedChip)
  }

  const sendDiscard = (receivedChip) => {
    props.moves.discardChip(receivedChip)
  }

  let chipUsage = {
    summoning: props.G.summoning,
    deleting: props.G.deleting
  }
  let chips = props.G.chipSet.map((chip) => {
    if (chip.active == false) {
      return (
        <UsedChip chip={chip} />
      )
    }
    else {
      return (
        <Chip chip={chip} chipUsage={chipUsage} sendChip={sendChip} sendDiscard={sendDiscard} />
      )
    }
  })

  let statusChip = "Building"
  if (chipUsage.deleting) {
    statusChip = "Discarding"
  }

  const handleBattle = (event) => {
    event.preventDefault()
    if (props.ctx.phase === "build") props.events.endPhase()
  }

  const handleOutcome = (event) => {
    event.preventDefault()
    props.moves.outcome(props.G.hero, props.G.villain)
    props.events.endPhase()
  }

  const handleDefend = (event) => {
    event.preventDefault()
    props.moves.defend(props.G.hero)
  }

  let beginButton =
  <button className="button is-success is-large" onClick={handleBattle}>Begin Battle</button>
  if (props.ctx.phase === "battle") beginButton = <></>

  let attackButton = <></>
  if (props.ctx.phase === "battle") {
    attackButton =
    <button className="button is-large is-primary" onClick={handleOutcome}>
    Attack!
    </button>
  }

  let defendButton = <></>
  if (props.ctx.phase === "battle") {
    defendButton =
    <button className="button is-info is-large" onClick={handleDefend}>
    Add to Defense
    </button>
  }

  return (
    <div style={{ padding: 20 }}>
      <div className="columns is-multiline">
        <Card character={props.G.hero} />
        <div className="column is-4" />
        <Card character={props.G.villain} />
        <div className="column is-4" />
      </div>
      <div className="buttons">
      {beginButton}
      {attackButton}
      {defendButton}
      </div>
      <div className="field is-grouped">
          <p className="control">
              <button className="button is-primary" onClick={props.moves.summoning}>Build</button>
          </p>

          <p className="control">
              <button className="button is-danger" onClick={props.moves.deleting}>Discard</button>
          </p>

          <p className="control">Discarded Chips: {props.G.chipLoss}</p>
      </div>
      <p className="title">{statusChip}</p>
      <p className="titlte">{props.G.error}</p>
      <div className="columns is-mobile is-multiline" style={{ marginTop: 20 }}>
      {chips}
      </div>
    </div>
  )
}

export default Battle

// <div className="buttons are-medium" style={{ marginTop: 15 }}>
// <button className="button is-primary">Attack</button>
// <button className="button is-info">Defend</button>
// <button className="button is-warning">Recharge</button>
// </div>
