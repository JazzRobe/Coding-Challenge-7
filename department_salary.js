//task 1: create a department structure

const company = {
    departments: [
        {
            departmentName: "Engineering",
            employees: [
                {
                    name: "Alice",
                    salary: 100000,
                    subordinates: [
                        {
                            name: "Bob",
                            salary: 80000,
                            subordinates: [
                                {
                                    name: "Charlie",
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "David",
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: "Sales",
            employees: [
                {
                    name: "Eve",
                    salary: 85000,
                    subordinates :[
                        {
                            name: "Frank",
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Grace",
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};


//task 2: create a recursive function to calculate total salary for a department

function calculateEmployeeSalary(employee) {
    let totalSalary = employee.salary; //total salary includes employees
    if (employee.subordinates.length > 0) {
      employee.subordinates.forEach(subordinate => {
        totalSalary += calculateEmployeeSalary(subordinate);
      }); //loops to see if any subords, adds them to the salary
    }
    return totalSalary; //returns salary of employees and their subord
  }
  
  function calculateDepartmentSalary(department) {
    let totalSalary = 0; //initialize
    department.employees.forEach(employee => {
      totalSalary += employee.salary; 
      if (employee.subordinates.length > 0) {
        employee.subordinates.forEach(subordinate => {
          totalSalary += calculateEmployeeSalary(subordinate);
        }); //same as before, while adding all employees of that dept
      }
    });
    return totalSalary;
  }

const engineeringSalary = calculateDepartmentSalary(company.departments[0]); //0 = eng dept in array
const salesSalary = calculateDepartmentSalary(company.departments[1]); //1 = sales dept in array

console.log(`Total salary for engineering department: $${engineeringSalary}`);
console.log(`Total salary for sales department: $${salesSalary}`);