import Scout from './Cards/Scout'
import Rifle from './Cards/Rifle'

export const Game = {
  setup: () => (
    {
      hero: {
        name: "Mega Man",
        life: 4,
        attack: 3,
        defense: 2,
        battery: 3
      },
      villain: {
        name: "Zero",
        life: 4,
        attack: 3,
        defense: 2,
        battery: 3
      },
      chips: [],
      battlefield: [],
      selected: {},
      gmp: 4,
      power: 0,
      error: "",
      character: {
        deployed: false,
        name: "",
        life: 0,
        power: 0
      }
    }
  ),
  moves: {
    select: (G, ctx, card) => {
      if (card.type == "Active") {

      }
    },
    chip: (G, ctx, chip) => {
      if (chip.type == "Buff") {
        G.hero.attack += chip.boost
      }
      else if (chip.type == "Debuff") {
        G.villain.attack -= chip.boost
      }
    },
    deployCharacter: (G, ctx, card) => {
      if (G.gmp >= card.cost && !card.deployed) {
        G.gmp -= card.cost
        G.power += card.power

        card.deployed = true

        G.battlefield = [
          ...G.battlefield,
          card
        ]

        G.error = ""
      }
      else if (card.deployed) {
        G.error = `${card.name} Already Deployed`
      }
      else if (G.gmp < card.cost) {
        G.error = `Not Enough GMP to Deploy ${card.name}`
      }
    },
    addWeapon: (G, ctx, card, character) => {
      if (G.gmp >= card.cost && !card.deployed && character.deployed) {
        G.gmp -= card.cost
        G.power += card.power

        card.deployed = true

        G.battlefield = [
          ...G.battlefield,
          card
        ]

        G.error = ""
      }
      else if (!character.deployed) {
        G.error = "No Character to Equip Item To"
      }
      else if (card.deployed) {
        G.error = `${card.name} already equipped`
      }
      else if (G.gmp < card.cost) {
        G.error = `Not Enough GMP to Add ${card.name}`
      }
    }
  },

  phases: {
    playerTurn: {
      start: true,
      onBegin: (G, ctx) => {
        G.error = ""
        G.gmp++
        // G.battlefield = G.battlefield.map((card) => {
        //   let deployment = card.deployed
        //   if (card.type === "Active") {
        //     deployment = false //remove all Active cards
        //   }
        //   return (
        //     {
        //       ...card,
        //       deployed: deployment
        //     }
        //   )
        // })
        G.battlefield = G.battlefield.filter(card => card.type == "Passive")
      },
      onEnd: (G, ctx) => {

      },
      next: 'enemyTurn'
    },
    enemyTurn: {
      onBegin: (G, ctx) => {
        G.error = ""
      },
      onEnd: (G, ctx) => {

      },
      next: 'playerTurn'
    }
  }

  // ai: {
    // enumerate: (G, ctx) => {
      // let moves = [];
      // for (let i = 0; i < 9; i++) {
      //   if (G.cells[i] === null) {
      //     moves.push({ move: 'clickCell', args: [i] })
      //   }
      // }
      // return moves
    // }
  // }
};
