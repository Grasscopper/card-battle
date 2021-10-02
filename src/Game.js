export const Game = {
  setup: () => (
    {
      gmp: 5,
      power: 0,
      ePower: 0
    }
  ),
  moves: {
    deployScout: (G, ctx) => {
      G.gmp = G.gmp - 3
      G.power = G.power + 3
      ctx.events.endTurn()
    }
  }
}
