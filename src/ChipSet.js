export let chipSet = [
  {
    id: 0,
    name: "Overclock", //user interface
    type: "Buff", //how to apply boost property
    boost: 1, //boost attack by 1
    cost: 0, //discard, (active = false), 0 chips to use
    active: true //true if not discared (unused)
  },
  {
    id: 1,
    name: "Overclock",
    type: "Buff",
    boost: 1,
    cost: 0,
    active: true
  },
  {
    id: 2,
    name: "Digital Overload",
    type: "Buff",
    boost: 2,
    cost: 1,
    active: true
  },
  {
    id: 3,
    name: "Psyche Hack",
    type: "Debuff",
    boost: 1,
    cost: 0,
    active: true
  }
]
