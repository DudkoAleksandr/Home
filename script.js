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

function getStats(grades) {
  const obj = {};
  let min = Infinity;
  let max = 0;
  let summ = 0;
  let average = 0;

  for (let num of grades) {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }

    summ = summ + Number(num);
  }

  average = summ / grades.length;

  for (let numObj in obj) {
    if (numObj > max) {
      max = numObj;
    }
    if (numObj < min) {
      min = numObj;
    }
    console.log(numObj, obj[numObj])
  }
  return { min, max, obj, average };
}
// console.log(getStats([3, 3, 4, 4, 4, 5, 5, 5, 5, 5]));

// 5. Задание с html, на основе прошлой задачи

// Создай веб-страницу с интерфейсом для анализа оценок.
// На странице должно быть поле ввода, в которое пользователь может ввести оценки, разделённые запятыми (например: 5,4,5,3,4,5), а также кнопка для запуска расчёта.

// Результат нужно выводить на страницу, он включает:
// минимальное, максимальное и среднее арифметическое значение. И сколько раз встречается каждая оценка

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const resultObj = {};
  // let min = Infinity;
  // let max = 0;
  // let sum = 0;
  // let average = 0;

  let numberValue = input.value.split(",").map((number) => {
    return Number(number);
  });

  console.log(numberValue);

  const {max, min, average} = getStats(numberValue);

  // for (let keyNum of numberValue) {
  //   if (resultObj[keyNum] === undefined) {
  //     resultObj[keyNum] = 1;
  //   } else {
  //     resultObj[keyNum]++;
  //   }
  //   sum = sum + Number(keyNum)
  //   console.log(sum)
  // }

  // for (key in resultObj) {
  //   if (key > max) {
  //     max = key;
  //   }

  //   if (key < min) {
  //     min = key;
  //   }

  //   const pSr = document.createElement("p");
  //   pSr.innerHTML = `Оценка ${key} повторяется ${resultObj[key]} раз`;
  //   result.append(pSr);
  // }

  // average = sum / numberValue.length;

  const pMax = document.createElement("p");
  pMax.innerHTML = `Максимальная оценка: ${max} `;
  result.append(pMax);

  const pMin = document.createElement("p");
  pMin.innerHTML = `Минимальная оценка: ${min}`;
  result.append(pMin);

  const pAverage = document.createElement("p");
  pAverage.innerHTML = `Средняя оценка: ${average.toFixed(1)}`;
  result.append(pAverage);

});
