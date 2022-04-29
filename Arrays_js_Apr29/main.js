// ============Массивы=====================Array=================
// let array = new Array() //-объявление массива
// // console.log(array);
// let fruits = ['apple', 'pineapple', 'banana', 'melon', 'watermelon']
// console.log(fruits); // вывод всего массива
// // массивы хранят в себе любой тип данных, у массива есть элементы и индексы
// console.log(fruits[2]); // вывод элемента по индексу
// fruits[0] = 'potato'
// console.log(fruits);  //замена в массиве данного

// let all = [true, 99, 'string', undefined, null, false, {},]
// console.log(all);

// console.log(all.length) // длина массива

// let students =['Dastan', 'Bekzar', 'Akylai', 'Edil', 'Aigul', 'Bakyt','Aidai', 'Ruslan',]
// console.log(students);
// students.push('Beka'); //метод добавления в конец массива
// console.log(students)
// students.unshift('Aruun')
// console.log(students) //метод добавления в начало массива


// students.pop() // удаляет с конца массива
// console.log(students)


// students.shift() //удаляет первый элемент с начала массива
// console.log(students)

// console.log(students.indexOf('Aidai')); // поиск индека
// console.log(students.indexOf('Aida'));  // если нет такого элемента, то выводит -1

// =================================выбор массива с помощью цикла===================
// let students =['Dastan', 'Bekzar', 'Akylai', 'Edil', 'Aigul', 'Bakyt','Aidai', 'Ruslan',]

// console.log(students[5]) // самый примитивный способ вывести данное из массива

// for(let i = 0; i<students.length; i++) {
//     console.log(students[i]+ '- student')
// }

// ===================================================================================
// const all = [] 
// const even = []
// const odd = []

// for(let n = 0; n<=100; n++) {
//     all.push(n)
//  n%2 === 0 ? even.push(n) : odd.push(n)

// }
// console.log(all);
// console.log(even);
// console.log(odd);

// =======================================================================================
let questions = ['Какая компания создала JavaScript?', 'Кто президент США?', 'Когда был придуман Javascript', 'Когда закончилась Вов?' ]
let answers = ['1.Apple 2.Netscape 3.Microsoft 4.Google', '1.Билл Клинтон 2.Барак Обама 3.Дродж Буш 4.Джо Байден', '1.1993 2.1998 3.1996 4.1997', '1.1945 2.1948 3.1950 4.1944']
let correct_answers = ['Netscape', 'Джо Байден', '1996', '1945']


for(let i=1; i<questions.length; i++) {
     let num = prompt( questions[i] +'\n'+ answers[i])

if ( num == correct_answers[i]) {
    alert( 'Верно')
} else { 
    alert('Неверно!')
    break}
}


// if (num3 === '*') { 
//     // alert(num1 * num2)
//     // } else if(num3 ==='/'){
//     //     alert(num1 / num2)
//     // } else if(num3 === "-"){
//     //     alert(num1 - num2)
//     // }else if(num3 === "+"){
//     //     alert(num1 + num2)
    // =========================