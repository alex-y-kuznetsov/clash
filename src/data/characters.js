export default [
  {
    id: 1,
    name: 'John Wick',
    img: '/img/character_images/johnwick.jpg',
    stats: [
      {
        name: 'Health',
        value: 50
      },
      {
        name: 'Stamina',
        value: 40
      }
    ],
    items: [
      {
        name: 'Pencil',
        stats: {
          summary: 'Damage +10',
          damage: 10,
          health: 0,
          stamina: 0
        },
        img: '/img/character_items/pencil.jpg'
      }
    ],
    bio: 'Does not like dog jokes. Will draw a pencil sketch of you'
  },
  {
    id: 2,
    name: 'Monica Geller',
    img: '/img/character_images/monicageller.jpg',
    stats: [
      {
        name: 'Health',
        value: 30
      },
      {
        name: 'Stamina',
        value: 60
      }
    ],
    items: [
      {
        name: 'Spoonge',
        stats: {
          summary: 'Stamina +10',
          damage: 0,
          health: 0,
          stamina: 10
        },
        img: '/img/character_items/spoonge.jpg'
      }
    ],
    bio: 'Order is her law'
  },
  {
    id: 3,
    name: 'Winnie the Pooh',
    img: '/img/character_images/winniethepooh.jpg',
    stats: [
      {
        name: 'Health',
        value: 70
      },
      {
        name: 'Stamina',
        value: 30
      }
    ],
    items: [
      {
        name: 'Pot of Honey',
        stats: {
          summary: 'Health +10',
          damage: 0,
          health: 10,
          stamina: 0
        },
        img: '/img/character_items/potofhoney.jpg'
      }
    ],
    bio: 'Honey, I\'m home. Where is all the honey?'
  }
]