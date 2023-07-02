const user = {
  firstName: 'Leonardo',
  lastName: 'Andrade',
  full_name: 'Leonardo Andrade',
  age: '23',
  instagram: '@oleonardo.deandrade',
  skills: ['Back-end', 'Front-end', 'Mobile'],
};

// Rest (Resto) Operator
const { firstName, skills, ...resto } = user;
const [primary, ...restoUser] = skills;

console.log( resto );
console.log( restoUser );