import { chipSet } from './ChipSet'
import { getRandomInt } from './myFunctions.js'

export const NewGame = {
  setup: () => (
    {
      hero: {
        name: "Mega Man",
        picture: "https://pbs.twimg.com/profile_images/1378037175220981760/NqJolFmD_400x400.jpg",
        life: 4,
        attack: 3,
        defense: 2, //currency to reduce damage taken
        battery: 3 //currency to reuse chips
      },
      heroReset: {
        name: "Mega Man",
        picture: "https://pbs.twimg.com/profile_images/1378037175220981760/NqJolFmD_400x400.jpg",
        life: 4,
        attack: 3,
        defense: 2, //currency to reduce damage taken
        battery: 3 //currency to reuse chips
      },
      villain: {
        name: "Zero",
        picture: "https://avatarfiles.alphacoders.com/279/thumb-279354.jpg",
        life: 4,
        attack: 3,
        defense: 2,
        battery: 3
      },
      villainReset: {
        name: "Zero",
        picture: "https://avatarfiles.alphacoders.com/279/thumb-279354.jpg",
        life: 4,
        attack: 3,
        defense: 2,
        battery: 3
      },
      addedHeroDef: 0,
      addedVillainDef: 0,
      chipSet: chipSet,
      summoning: true,
      deleting: false,
      chipLoss: 0, //chips discared to summon other chips
      error: "",
      log: ""
    }
  ),
  moves: {
    defend: (G, ctx, character) => { //spend defense stat to reduce damage in the battle phase
      if (character.defense > 0) {
        if (G.hero.name === character.name) {
          G.hero.defense--
          G.addedHeroDef++
        }
        else if (G.villain.name === character.name) {
          G.villain.defense--
          G.addedVillainDef++
        }
      }
      else {
        G.error = "0 Shields found. Cannot boost defense this round."
      }
    },
    summoning: (G, ctx) => {
      G.summoning = true
      G.deleting = false
    },
    deleting: (G, ctx) => {
      G.deleting = true
      G.summoning = false
    },
    discardChip: (G, ctx, chip) => {
      G.chipLoss++
      G.chipSet = G.chipSet.map((current) => {
        let status = current.active
        if (current.id === chip.id) {
          status = false
        }
        return (
          {
            ...current,
            active: status
          }
        )
      })
    },
    outcome: (G, ctx, hero, villain) => {
      let damage = 0
      if (hero.attack > villain.attack) { //hero wins, villain receives damage
        damage = hero.attack - villain.attack + G.addedVillainDef
        G.villain.life -= damage
        if (G.villain.life < 0) G.villain.life = 0
      }
      else if (villain.attack > hero.attack) { //villain wins, hero receieves damage
        damage = villain.attack - hero.attack + G.addedHeroDef
        G.hero.life -= damage
        if (G.hero.life < 0) G.hero.life = 0
      }
    },
    chip: (G, ctx, chip) => {
      if (chip.cost > 0) {
        if (G.chipLoss >= chip.cost) {
          G.error = ""
          G.chipLoss -= chip.cost
          if (chip.type == "Buff") {
            G.hero.attack += chip.boost
          }
          else if (chip.type == "Debuff") {
            G.villain.attack -= chip.boost
          }
          G.chipSet = G.chipSet.map((current) => {
            let status = current.active
            if (current.id === chip.id) {
              status = false
            }
            return (
              {
                ...current,
                active: status
              }
            )
          })
        }
        else {
          G.error = `Need ${chip.cost} discarded chip(s) to use ${chip.name}.`
        }
      }
      else {
        G.error = ""
        if (chip.type == "Buff") {
          G.hero.attack += chip.boost
        }
        else if (chip.type == "Debuff") {
          G.villain.attack -= chip.boost
        }
        G.chipSet = G.chipSet.map((current) => {
          let status = current.active
          if (current.id === chip.id) {
            status = false
          }
          return (
            {
              ...current,
              active: status
            }
          )
        })
      }
    }
  },

  phases: {
    build: { //both opponents make moves at the same time without the other knowing their moves being made
      start: true,
      onBegin: (G, ctx) => {
        G.hero = {
          ...G.hero,
          attack: G.heroReset.attack
        }
        G.villain = {
          ...G.villain,
          attack: G.villainReset.attack
        }
        G.addedHeroDef = 0
        G.addedVillainDef = 0
      },
      onEnd: (G, ctx) => {
        let enemyBoost = getRandomInt(0,3)
        let enemyDefense = getRandomInt(0,2)
        G.villain.attack += enemyBoost
        G.addedVillainDef += enemyDefense
      },
      next: 'battle'
    },
    battle: { //both opponents reveal their hand and fight
      onBegin: (G, ctx) => {
      },
      onEnd: (G, ctx) => {
      },
      next: 'build'
    }
  }
};
