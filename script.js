// 3. Написать функцию getMostFrequent(obj), которая:

// принимает объект вида { a: 2, b: 5, c: 1 }

// возвращает ключ с наибольшим значением (в данной ситуации вернет "b")
// const obj = {
//     a: 2,
//     b: 5,
//     c: 1
// };
// let result = ''
// let maxNun = 0

// function getMostFrequent(obj){
//     for(let num in obj){
//         if(obj[num] > maxNun){
//             maxNun = obj[num]
//             result = num
//         }
//     }
//     return result
// }
// console.log(getMostFrequent(obj))

// 4. Написать функцию getStats(grades):

// принимает массив чисел, например [3, 3, 4, 4, 4, 5, 5, 5, 5, 5]

// возвращает объект:

// {
//   min: 3,
//   max: 5,
//   average: 4.3,
//   count: { 3: 2, 4: 3, 5: 5 }
// }

// То есть нужно найти минимальное число, максимальное, среднее арифметическое и посчитать, сколько раз встречается каждое из чисел (числа могут быть не сортированы)

// function getStats(grades) {
//   const obj = {};
//   let min = Infinity;
//   let max = 0;
//   let summ = 0;
//   let average = 0;

//   for (let num of grades) {
//     if (obj[num] === undefined) {
//       obj[num] = 1;
//     } else {
//       obj[num]++;
//     }

//     summ = summ + num;

//   }
  
//   average = summ / grades.length;

//   for (let numObj in obj) {
//     if (obj[numObj] > max) {
//       max = obj[numObj];
//     }
//     if (obj[numObj] < min) {
//       min = Number(numObj);
//     }
//   }
//   return { min, max, obj, average };
// }
// console.log(getStats([3, 3, 4, 4, 4, 5, 5, 5, 5, 5]));

// 5. Задание с html, на основе прошлой задачи

// Создай веб-страницу с интерфейсом для анализа оценок.
// На странице должно быть поле ввода, в которое пользователь может ввести оценки, разделённые запятыми (например: 5,4,5,3,4,5), а также кнопка для запуска расчёта.

// Результат нужно выводить на страницу, он включает:
// минимальное, максимальное и среднее арифметическое значение. И сколько раз встречается каждая оценка
