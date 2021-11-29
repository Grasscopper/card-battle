import React from 'react'

const Outcome = (props) => {
  let damage = 0
  let defeat = {name: ""}
  let lifeLost = 0
  if (props.hero.attack > props.villain.attack) { //hero wins, villain receives damage
    damage = props.hero.attack - props.villain.attack - props.game.addedVillainDef
    defeat = props.villain
    lifeLost = props.villain - damage
  }
  else if (props.villain.attack > props.hero.attack) { //villain wins, hero receieves damage
    damage = props.villain.attack - props.hero.attack - props.game.addedHeroDef
    defeat = props.hero
    lifeLost = props.hero - damage
  }

  return (
    <div className="column is-4">
      <span className="icon-text">
        <span style={{ fontWeight: "bold" }}>{props.game.hero.name} {props.game.hero.attack}</span>

       <span className="icon" style={{ marginLeft: 0 }}>
        <i className="fas fa-fist-raised"></i>
      </span>

      <p style={{ marginRight: 6 }}>vs</p>

      <span style={{ fontWeight: "bold" }}>{props.game.villain.name} {props.game.villain.attack}</span>

           <span className="icon" style={{ marginLeft: 0 }}>
               <i className="fas fa-fist-raised"></i>
           </span>
       </span>

       <span className="icon-text" style={{ color: "#F14668", paddingLeft: 20, paddingRight: 20 }}>
           <span style={{ fontWeight: "bold" }}>{defeat.name} {defeat.life}</span>

           <span className="icon" style={{ marginLeft: 0 }}>
             <i className="fas fa-heart"></i>
           </span>

           <span className="icon" style={{ paddingRight: 5 }}>
             <i className="fas fa-arrow-right"></i>
           </span>

           <span style={{ fontWeight: "bold" }}>{lifeLost}</span>

           <span className="icon">
             <i className="fas fa-heart"></i>
           </span>
       </span>
   </div>
  )
}

export default Outcome
