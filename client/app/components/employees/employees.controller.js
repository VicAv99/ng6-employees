class EmployeesController {
  name = 'employees';
  employees = [];
  selectedEmployee = {};
  constructor(employeesService) {
    'ngInject';
    this.employeesService = employeesService;
  }

  $onInit() {
    this.getAllEmployees();
    this.initForm();
  }

  selectEmployee(employee) {
    this.selectedEmployee = employee;
    this.form = employee;
  }

  getAllEmployees() {
    this.employeesService
      .getEmployees()
      .then(res => this.employees = res.data)
      .catch(err => console.log('error', err));
  }

  reset() {
    this.form = this.initForm();
  }

  initForm() {
    this.form = {
      id: null,
      fullName: '',
      userId: '',
      jobTitle: '',
      emailAddress: '',
      phoneNumber: ''
    }
  }

}

export default EmployeesController;
