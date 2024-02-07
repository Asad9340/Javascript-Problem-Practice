// problem 1
function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "The number of ticket selling cann't be negative";
  } else {
    let totalSellAmount = ticketSale * 120;
    let totalCost = 500 + 8 * 50;
    let totalRevenue = totalSellAmount - totalCost;
    return totalRevenue;
  }
}

// console.log(calculateMoney(1));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));

// problem 2
function checkName(name) {
  if (typeof name !== 'string') {
    return 'invalid';
  } else {
    let finalName = name.toLowerCase();
    let size = name.length - 1;
    if (
      finalName[size] === 'a' ||
      finalName[size] === 'y' ||
      finalName[size] === 'i' ||
      finalName[size] === 'e' ||
      finalName[size] === 'o' ||
      finalName[size] === 'u' ||
      finalName[size] === 'w'
    ) {
      return 'Good Name';
    } else {
      return 'Bad Name';
    }
  }
}
// console.log(checkName('Salman'));
// console.log(checkName('RAFEE'));
// console.log(checkName('Jhankar'));
// console.log(checkName(199));
// console.log(checkName(['Rashed']));

// problem 3

function deleteInvalids(val) {
  if (Array.isArray(val) === false) {
    return 'Input value is nat an Array';
  } else {
    let newArray = [];
    for (let i = 0; i < val.length; i++) {
      if (typeof val[i] === 'number' && !isNaN(val[i])) {
        newArray.push(val[i]);
      }
    }
    return newArray;
  }
}

// console.log(deleteInvalids([
//   1,
//   null,
//   undefined,
//   18,
//   -19,
//   NaN,
//   '12',
//   [1, 2],
//   { ob: 'lala' },
// ]));
// console.log(deleteInvalids(['1', { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));

// problem 4

function password(obj) {
  let x = Object.hasOwn(obj, 'name');
  let y = Object.hasOwn(obj, 'birthYear');
  let z = Object.hasOwn(obj, 'siteName');
  if (
    x == true &&
    y == true &&
    z == true &&
    obj.birthYear.toString().length >= 4
  ) {
    let password = `${
      obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)
    }#${obj.name}@${obj.birthYear}`;
    return password;
  } else {
    return 'Invalid';
  }
}

// console.log(
//   password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google' })
// );
// console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));
// console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));
// console.log(password({ name: 'maisha', birthYear: 2002 }));

// problem 5

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) === true && typeof livingCost === 'number') {
    let totalSalary = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        let newBalance = 3000 - arr[i] * (20 / 100);
        totalSalary = totalSalary + newBalance;
      } else {
        totalSalary = totalSalary + arr[i];
      }
    }
    let totalSavings = totalSalary - livingCost;
    if (totalSavings >= 0) {
      return totalSavings;
    } else {
      return "'earn more'";
    }
  } else {
    return 'invalid input';
  }
}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
// console.log(monthlySavings([1000, 2000, 2500], 5000));
// console.log(monthlySavings([900, 2700, 3400], 10000));
// console.log(monthlySavings(100, [900, 2700, 3400]));
