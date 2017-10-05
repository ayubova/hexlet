/* Добавьте в Object.prototype функцию hash, которая позволяет извлекать вложенные значения из объекта.

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.name.key'); // undefined
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined */

// BEGIN (write your solution here)
Object.prototype.hash = function hash(property) {
    return  property.split('.').reduce((acc, elem) => acc ? acc[elem] : undefined, this);
   };
   // END
   