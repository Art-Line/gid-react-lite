let man = new Man('Sergii', '18', '3454', 'male')
console.log(man);
man.render('#out-1');

let employer = new Employer('Kate', '25', '8967', 'female', '2022-01-03', '120000');
console.log(employer);
employer.render('#out-2');

console.log(employer.clientName);