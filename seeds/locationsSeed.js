exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('public_spaces').del(),
    knex('public_spaces').insert({   
      name: 'Redwood Park',
      latitude: 37.795211,
      longitude: -122.4021365,
      zIndex: 1,
      address:'535 Washington St',
      hours: 'Open Business Hours',
      description:'This extensively landscaped urban park offers redwood trees at the foot of the Transamerica Pyramid. It features, a tall water fountain, sculptures, and ample seating.',
      restrooms: 'Unknown' 
    }),
    knex('public_spaces').insert({   
      name: 'Galvanize Rooftop',
      latitude: 37.7875728,
      longitude: -122.3965731,
      zIndex: 2,
      address:'543 Howard street',
      hours: '9am - 5pm',
      description:'Public rooftop garden with seating.',
      restrooms: 'Yes' 
    }),
     knex('public_spaces').insert({   
      name: 'Westfield Sky Terrace',
      latitude: 37.78451,
      longitude: -122.4067089,
      zIndex: 3,
      address:'845 Market St',
      hours: 'Open Business Hours',
      description:'This extensive 9th floor rooftop space looks onto the dome of the mall and has views westward and sunlight.',
      restrooms: 'Yes' 
    }),
     knex('public_spaces').insert({   
      name: 'Empire Park',
      latitude: 37.7941318,
      longitude: -122.4039924,
      zIndex: 4,
      address:'642 Commercial St',
      hours: 'Open Business Hours',
      description:'Empire Park, is an urban garden that features a water fountain and landscaping. ',
      restrooms: 'None' 
    }),
     knex('public_spaces').insert({   
      name: 'Intercontinental Hotel Bay Terrace',
      latitude: 37.7820547,
      longitude: -122.4047409,
      zIndex: 5,
      address:'888 Howard St',
      hours: 'Open Business Hours',
      description:'There are two POPOS on the fourth and sixth floors. They have various seating arrangements and landscaping, each with views of the City.',
      restrooms: 'Yes' 
    }),
     knex('public_spaces').insert({   
      name: 'Citygroup Center',
      latitude: 37.7904604,
      longitude: -122.4011551,
      zIndex: 6,
      address:'1 Sansome St',
      hours: 'Open Business Hours',
      description:'Built with marble, and covered with glass, this greenhouse provides ample seating and tables.',
      restrooms: 'Yes' 
    }),
     knex('public_spaces').insert({   
      name: 'Gap Building',
      latitude: 37.7907867,
      longitude: -122.3909616,
      zIndex: 7,
      address:'2 Folsom St',
      hours: 'Open Business Hours',
      description:'This is a large plaza with several seating areas. Art sculptures are featured along with diverse landscaping.',
      restrooms: 'None' 
    }),
     knex('public_spaces').insert({   
      name: 'Gap Building',
      latitude: 37.7881028,
      longitude: -122.3991669,
      zIndex: 8,
      address:'101 2nd St',
      hours: 'Open Business Hours',
      description:'This greenhouse features large trees, windows, and art.',
      restrooms: 'None' 
    }),
  ]);
};