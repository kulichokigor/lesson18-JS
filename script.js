"use strich"

//Завдання 1

var a = '1';
if(a ==='1'){
	console.log('Верно!');
} else
	{console.log('Неверно!')
};

//Завдання 2

var item = 1;
if(item != true){
	console.log('Верно');
} else
	{console.log('Неверно')
};

(item != true) ? console.log('Верно') :
				console.log('Неверно');

//Завдання 3

var a = 3;
if(a > 0 && a < 4){
	console.log('Верно')
} else{
	console.log('Неверно')
};

//Завдання 4

var a = 4,
	b = 6;
if(a > 3 && a < 12 || b >= 7 && b < 15){
	console.log('Верно!!!!');
} else{
	console.log('Неверно');
}

//Завдання 5

// var mounth =+ prompt('Введите порядковый номер месяца?', '');
// if (mounth > 0 && mounth <= 2 || mounth === 12 ){
// 	alert('Зима')
// } else if(mounth > 2 && mounth <=5){
// 	alert('Весна')
// } else if(mounth > 5 && mounth <= 8){
// 	alert('Лето')
// } else if(mounth >8 && mounth <=11){
// 	alert('Осень')
// } else{
// 	alert('Не коректный ввод!')
// };

//Завдання 6

var i;
for (i = 0; i <= 100; i++){
	if(i%2 == 0){
		console.log(i);
	}
};
