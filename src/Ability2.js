import React from 'react'

const Ability2 = (props) => {
  return (
    <div className="column is-2 centered" style={{ border: "solid", textAlign: "center" }}>
      <p className="title">The Basics of CQC</p>
      <img src="https://www.metalgearinformer.com/wp-content/uploads/2013/06/MGSV-E3-Trailer-Dynamic-CQC.jpg" />
      <br />
      <span className="icon-text" style={{ marginTop: 10 }}>
        <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10 }}>+ 1</span>

        <span className="icon" style={{ marginRight: 10 }}>
          <i className="fas fa-fist-raised fa-2x"></i>
        </span>

        <span style={{ fontWeight: "bold", fontSize: 24, marginRight: 10, color: "#F14667" }}>- 1</span>

        <span className="icon" style={{ marginRight: 10, color: "#F14667" }}>
          <i className="fas fa-battery-full fa-2x"></i>
        </span>


      </span>

      <p style={{ marginTop: 10 }}>If the enemy is close by, deal additional damage.</p>

    </div>
  )
}

export default Ability2
