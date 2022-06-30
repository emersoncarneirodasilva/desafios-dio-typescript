/* Como podemos rodar isso em um arquivo .ts sem causar erros? */

//let employee = {};
//employee.code = 10;
//employee.name = "John";

/* Respostas */
// Resposta 1
const employee = {
  code: 7,
  name: "John Smith"
};

// Resposta 2
const employee2: {code: number, name: string} = {
  code: 10,
  name: "Mary C."
};


interface Employee {
  code: number;
  name: string;
};

// Resposta 3
const employeeObj = {} as Employee;
employee.code = 23;
employee.name = "Paul Jones";

// Resposta 4
const employeeObj2: Employee = {
  code: 30,
  name: "Phellip W."
};

console.log(employee);
console.log(employee2);
console.log(employeeObj);
console.log(employeeObj2);