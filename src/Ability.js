import React from 'react'

const Ability = (props) => {
  return (
    <div className="column is-2 centered" style={{ border: "solid", textAlign: "center" }}>
      <p className="title">AM MRS-4 Rifle</p>
      <img src="https://www.metalgearinformer.com/wp-content/uploads/2013/06/Metal-Gear-Solid-V-The-Phantom-Pain-E3-2013-Punished-Snake.jpg" />
      <br />
      <span className="icon-text" style={{ marginTop: 10 }}>
        <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10 }}>+ 2</span>

        <span className="icon" style={{ marginRight: 10 }}>
          <i className="fas fa-fist-raised fa-2x"></i>
        </span>

        <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10, color: "#F14667" }}>- 1</span>

        <span className="icon" style={{ marginRight: 10, color: "#F14667" }}>
          <i className="fas fa-battery-full fa-2x"></i>
        </span>


      </span>

    </div>
  )
}

export default Ability
