class EmployeesController {
  name = 'employees';
  constructor(employeesService) {
    'ngInject';
    this.employeesService = employeesService;
  }

  $onInit() {

  }

}

export default EmployeesController;
