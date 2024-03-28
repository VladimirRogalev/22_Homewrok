const firm = new Company();

addPerson.onclick = function () {
    const employee = new Employee(employeeId.value.trim(), firstName.value.trim(), lastName.value.trim(), date.value, salary.value);
    if (firm.addEmployee(employee)) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(employee.toString()));
        employeesList.appendChild(li);
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete employee';
        li.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            employeesList.removeChild(li);
            const arr = firm.employees.findIndex(p => p.id === employee.id);
            if (arr !== -1) {
                firm.employees.splice(arr, 1);
            }
            printStats(firm);
        })

        // console.log(firm.employees);
        // console.log(employee.toString());
    } else {
        alert(`Employee with id = ${employee.id} exists`);
    }
    employeeId.value = firstName.value = lastName.value = date.value = salary.value = '';
}

calcStats.onclick = function () {
    printStats(firm);
}
function printStats(firm) {
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = "";
    if (firm.employees.length) {
        const start = firm.employees[0].salary
        const minSalary  = firm.employees.reduce((res, p) => p.salary < res ? p.salary : res, start);
        const maxSalary  = firm.employees.reduce((res, p) => p.salary > res ? p.salary : res, start);
        const avgSalary = firm.employees.reduce((res, p) => p.salary + res, 0) / (firm.employees.length );
        const divStats = document.createElement('div')
        const h3avg = createInfoElement(`Average salary: ${avgSalary .toFixed(1)}`, 'h3');
        const h3min = createInfoElement(`Min salary: ${minSalary }`, 'h3');
        const h3max = createInfoElement(`Max salary: ${maxSalary }`, 'h3');
        divStats.append(h3avg, h3min, h3max);
        statsDiv.appendChild(divStats);
    } else {
        statsDiv.appendChild(createInfoElement('No stats', 'h3'));
    }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}