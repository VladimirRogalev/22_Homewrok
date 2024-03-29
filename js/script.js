const firm = new Company();

addPerson.onclick = function () {
    const employee = new Employee(employeeId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value, salary.value);
    if (firm.addEmployee(employee)) {
        clearStats();
        const li = employee.createEmployeeDOMElement('li');
        const buttonDel = createButtonDelete( function () {
            firm.removeEmployee(employee.id);
            clearStats();
        });
      buttonDel.classList.add('del');
      li.append(buttonDel);
        employeesList.append(li);
    } else {
        alert(`Employee with id = ${employee.id} exists`);
    }
    employeeId.value = firstName.value = lastName.value = age.value = salary.value = '';
}

calcStats.onclick = function () {
    clearStats();
    stats.appendChild(firm.createCompanyStatsDOMElement());
}
function clearStats () {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}


