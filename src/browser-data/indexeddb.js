const demo = {

  db: {},

  init: () => {
      demo.db = new PouchDB('html5-playground');
      console.log(demo.db);
  },

  add: async () => {
    const person = {
        _id: 'nisan',
        website: 'nisan-sabag.com'
    };

    const response = await demo.db.put(person);
    console.log(response);
  },

  get: async () => {
      const craig = await demo.db.get('nisan');
      console.log(craig);
  },

  update: async () => {
      const person = await demo.db.get('nisan');
      person.github = 'nisan250';
      const response = await demo.db.put(person);
      console.log(response);
  },

  delete: async () => {
      const person = await demo.db.get('nisan');
      const response = await demo.db.remove(person);
      console.log(response);
  }
};
