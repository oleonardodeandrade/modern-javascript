const user = {
  skills: ['Back-end', 'Front-end', 'Mobile'],
  active: false,
  firstName: 'Leonardo',
  lastName: 'Andrade',
  age: '23',
  instagram: '@oleonardo.deandrade',
};

// Spread (espalhar) Operator
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
};

console.log(user);
console.log(updatedUser);