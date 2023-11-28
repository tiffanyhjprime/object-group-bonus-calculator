// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
    //work the individual bonus rules(conditionals)

  let bonus;
    //if rating is 2, bonus is 0
    if(employee.reviewRating <= 2){
      bonus = 0
    }

    //if rating is 3, bonus is 4%
    if(employee.reviewRating === 3){
      bonus = 4
    }

    //if rating is 4, bonus is 6%
    if(employee.reviewRating === 4){
      bonus = 6
    }

    //if rating is 5, bonus is 10%
    if(employee.reviewRating === 5){
      bonus = 6
    }

    //if employeeNumber is 4 digits long, bonus + 5%
        //string.length ===4
    if(employee.employeeNumber.length ===4 ){
      bonus = bonus + 5
    }

    //if annualIncome is > 65000, bonus is bonus-1%
    if(Number(employee.annualSalary) > 65000){
      bonus = bonus - 1
    }

    //if bonus is > 13%, bonus = 13
    //if bonus is <0, bonus = 0
    if(bonus > 13){
      bonus = 13
    }
    if(bonus < 0){
      bonus = 0
    }

  //calculate total compensation bonus/100
  let bonusPercentage = bonus / 100
  console.log('bonus percentage is:', bonusPercentage)

  //calculate totalBonus - 
let totalBonus = bonusPercentage * employee.annualSalary

let totalCompensation = Number(employee.annualSalary) + totalBonus
console.log("total compensation", totalCompensation)

  // return new object with bonus results

  let result = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
    }
  console.log('bonus for $(employee.name):',result)
  return result
}


//call function for an employee
    //todo: later this will be a loop for all employees
calculateIndividualEmployeeBonus(employees[0])

//loop to run function over all employees and console log

for(let empl of employees){
  console.log(calculateIndividualEmployeeBonus(empl))
}
