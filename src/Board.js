import React from 'react'

const Board = (props) => {
  let scout = {
    life: 3,
    attack: 3,
    cost: 3
  }

  let rifle = {
    attack: 2,
    cost: 2
  }

  let grenade = {
    attack: 1,
    cost: 1
  }

  const deployScout = (event) => {
    event.preventDefault()
    props.moves.deployScout()
  }

  return (
    <div>
    <section className="hero">
    <div className="hero-body">
    <p className="title">
    Card Battle
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
        <div className="column"
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

        <div className="column" style={{ border: "solid", marginLeft: 10, marginRight: 10 }}>

          <p className="title">
          AM MRS-4 Assault Rifle
          </p>
          <p className="subtitle">
          Weapon Card (Active)
          </p>
          <p>+2 PLAYER ATTACK POWER</p>
          <p>COST: 2 GMP</p>

        </div>

        <div className="column" style={{ border: "solid", marginLeft: 10, marginRight: 10 }}>

          <p className="title">
          Smoke Grenade
          </p>
          <p className="subtitle">
          Weapon Card (Active)
          </p>
          <p>-1 ENEMY ATTACK POWER</p>
          <p>COST: 1 GMP</p>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Board
