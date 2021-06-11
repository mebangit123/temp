let employeePayrollList;

const remove = (data) => {
    let employeeData = employeePayrollList.find(empData => empData._id == data._id);
    if(!employeeData) {
        return;
    }
    const index = employeePayrollList.map(empData => empData._id)
                                      .indexOf(employeeData._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
    document.querySelector('.emp-count').textContent= employeePayrollList.length;
    createInnerHtml();
}