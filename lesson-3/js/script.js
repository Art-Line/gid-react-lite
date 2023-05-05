let man = new Man(183, 80, 34, 'male', 'Sergey', '001144', 'green');
console.log(man);

let car = new Car('bwm', 'x5', 3000, 'gas', 'orange', 'img/car.jpg');
console.log(car);
car.render();

let car2 = new Car('audi', 'a5', 1800, 'diesel', 'white', 'img/car2.jpg');
car2.render();

let car3 = new Car('mersedes', '600', 1200, 'gazoline', 'black', 'img/car3.jpg');
car3.render();

let header = new Header('Заголовок', 'Заголовок 2', 'сайт авто', 'img/car3.jpg', ['+380959998877', 'car@gmail.com']);
header.render();