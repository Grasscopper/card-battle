import React from 'react'

const Card = (props) => {
  return (
    <div className="column is-2 centered ${props.dad}" style={{ border: "solid", textAlign: "center" }}>
    <p className="title">{props.character.name}</p>
    <img src={props.character.picture} />
    <br />

    <span className="icon-text" style={{ marginTop: 10 }}>
          <span className="icon" style={{ marginRight: 10 }}>
              <i className="fas fa-heart fa-2x"></i>
          </span>

          <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10 }}>{props.character.life}</span>

          <span className="icon" style={{ marginRight: 10 }}>
              <i className="fas fa-fist-raised fa-2x"></i>
          </span>

          <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10 }}>{props.character.attack}</span>

          <span className="icon" style={{ marginRight: 10 }}>
              <i className="fas fa-shield-alt fa-2x"></i>
          </span>

          <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10 }}>{props.character.defense}</span>

          <span className="icon" style={{ marginRight: 12 }}>
              <i className="fas fa-battery-full fa-2x"></i>
          </span>

          <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10 }}>{props.character.battery}</span>

      </span>
    </div>
  )
}

export default Card


// <span className="icon">
// <i className="fas fa-fist-raised fa-2x"></i>
// </span>
//
// <span style={{ fontWeight: "bold" }}>6</span>
