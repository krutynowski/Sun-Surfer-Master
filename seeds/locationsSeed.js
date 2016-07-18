exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('public_spaces').del(),
    knex('public_spaces').insert({   
      name: 'Redwood Park',
      latitude: 37.795211,
      longitude: -122.4021365,
      zIndex: 1,
      address:'535 Washington St',
      hours: 'Unknown',
      description:'This extensively landscaped urban park offers redwood trees at the foot of the Transamerica Pyramid. It features, a tall water fountain, sculptures, and ample seating.',
      restrooms: 'Unknown' 
    }),
    knex('public_spaces').insert({   
      name: 'Galvanize Rooftop',
      latitude: 37.7875728,
      latitude: -122.3965731,
      zIndex: 2,
      address:'543 Howard street',
      hours: '9am - 5pm',
      description:'Public roof garden with seating',
      restrooms: 'Yes' 
    }),
    
  ]);
};