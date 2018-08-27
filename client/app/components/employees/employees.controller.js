class EmployeesController {
  name = 'employees';
  employees = [];
  constructor(employeesService) {
    'ngInject';
    this.employeesService = employeesService;
  }

  $onInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeesService
      .getEmployees()
      .then(res => this.employees = res.data)
      .catch(err => console.log('error', err));
  }

}

export default EmployeesController;
