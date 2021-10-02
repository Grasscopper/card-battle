export const Game = {
  setup: () => (
    {
      gmp: 4,
      power: 0,
      error: "",
      character: {
        deployed: false,
        name: "",
        life: 0,
        power: 0
      },
      rifle: false
    }
  ),
  moves: {
    deployScout: (G, ctx) => {
      if (G.gmp >= 3) {
        G.gmp = G.gmp - 3
        G.power = G.power + 3

        G.character = {
          deployed: true,
          name: "Scout",
          life: 3,
          power: 3,
          slots: []
        }

        G.error = ""
      }
      else {
        G.error = "Not Enough GMP to Deploy Scout"
      }
    },
    addRifle: (G, ctx) => {
      if (G.gmp >= 2 && G.character.deployed) {
        G.gmp = G.gmp - 2
        G.power = G.power + 2

        G.rifle = true

        G.error = ""
      }
      else if (G.character.deployed == false) {
        G.error = "No Character to Equip Item To"
      }
      else if (G.gmp < 2) {
        G.error = "Not Enough GMP to Add Weapon"
      }
    }
  },

  phases: {
    playerTurn: {
      start: true,
      onBegin: (G, ctx) => {
        G.gmp++
        if (G.rifle) {
          G.power = G.power - 2
        }
      },
      onEnd: (G, ctx) => {

      },
      next: 'enemyTurn'
    },
    enemyTurn: {
      onBegin: (G, ctx) => {

      },
      onEnd: (G, ctx) => {

      },
      next: 'playerTurn'
    }
  }
};
