const demo = {

  save: () => {
      const person = {
          name: 'Nisan Sabag',
          monitors: 2
      };

      localStorage.person = person;
      localStorage.personString = JSON.stringify(person);

      demo.get();
  },

  get: () => {
      console.log('person', localStorage.person);
      console.log('personString', JSON.parse(localStorage.personString));
  },

  load: () => {

  }

};

window.addEventListener('DOMContentLoaded', demo.load);
