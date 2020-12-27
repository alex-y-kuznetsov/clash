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
      },
      {
        name: 'Attack',
        value: 30
      },
      {
        name: 'Defense',
        value: 2
      }
    ],
    item: {
      name: 'Pencil',
      modifier: 'Attack',
      modifierValue: 10,
      summary: 'Attack +10',
      img: '/img/character_items/pencil.jpg'
      },
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
      },
      {
        name: 'Attack',
        value: 20
      },
      {
        name: 'Defense',
        value: 2
      }
    ],
    item: {
      name: 'Spoonge',
      modifier: 'Stamina',
      modifierValue: 10,
      summary: 'Stamina +10',
      img: '/img/character_items/spoonge.jpg'
    },
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
      },
      {
        name: 'Attack',
        value: 10
      },
      {
        name: 'Defense',
        value: 3
      }
    ],
    item: {
      name: 'Pot of Honey',
      modifier: 'Health',
      modifierValue: 10,
      summary: 'Health +10',
      img: '/img/character_items/potofhoney.jpg'
    },
    bio: 'Honey, I\'m home. Where is all the honey?'
  }
]