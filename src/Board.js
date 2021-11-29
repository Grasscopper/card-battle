import React from 'react'
import Card from './Card'
import Scout from './Cards/Scout'
import Rifle from './Cards/Rifle'

const Board = (props) => {
  const deployScout = (event) => {
    event.preventDefault()
    props.moves.deployCharacter(Scout)
  }

  const addRifle = (event) => {
    event.preventDefault()
    props.moves.addWeapon(Rifle, Scout)
  }

  const endPhase = (event) => {
    event.preventDefault()
    props.events.endPhase()
  }

  const battlefield = props.G.battlefield.map((card) => {
    return (
      <Card card={card} />
    )
  })

  return (
    <div>
    <section className="hero">
    <div className="hero-body">
    <p className="title">
    Card Battle
    </p>
    <p className="title" style={{ color: "#F14667" }}>
    {props.G.error}
    </p>
    <p className="title">
    PLAYER GMP: {props.G.gmp}
    </p>
    <p className="title">
    PLAYER ATTACK POWER: {props.G.power}
    </p>
    </div>
    </section>

    <div style={{ padding: 10 }}>

      <div className="columns is-multiline">
        {battlefield}
      </div>


      <div className="columns is-multiline">
        <div className="column is-4"
        style={{ border: "solid", marginLeft: 10, marginRight: 10 }}
        onClick={deployScout}>

          <p className="title">
          Scout
          </p>
          <p className="subtitle">
          Character Card (Passive)
          </p>
          <p>3 LIFE</p>
          <p>+3 PLAYER ATTACK POWER</p>
          <p>COST: 3 GMP</p>

        </div>

        <div className="column is-4" style={{ border: "solid", marginLeft: 10, marginRight: 10 }} onClick={addRifle}>

          <p className="title">
          AM MRS-4 Assault Rifle
          </p>
          <p className="subtitle">
          Weapon Card (Active)
          </p>
          <p>+2 PLAYER ATTACK POWER</p>
          <p>COST: 2 GMP</p>

        </div>

        <div className="column is-4" style={{ border: "solid", marginLeft: 10, marginRight: 10 }}>

          <p className="title">
          Smoke Grenade
          </p>
          <p className="subtitle">
          Weapon Card (Active)
          </p>
          <p>-1 ENEMY ATTACK POWER</p>
          <p>COST: 1 GMP</p>

        </div>

        <div className="column is-4" style={{ border: "solid", marginLeft: 10, marginRight: 10 }} onClick={endPhase}>

          <p className="title">
          End Turn
          </p>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Board
