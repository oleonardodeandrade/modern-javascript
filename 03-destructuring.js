const user = {
  firstName: 'Leonardo',
  lastName: 'Andrade',
  full_name: 'Leonardo Andrade',
  age: '23',
  instagram: '@oleonardo.deandrade',
  skills: ['Back-end', 'Front-end', 'Mobile'],
};

// Destructuring
const { firstName, age, skills, full_name: fullName } = user;
const [primary, secondary, tertiary] = skills;

console.log( firstName, age, fullName, skills );
console.log( primary, secondary, tertiary );