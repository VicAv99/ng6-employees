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
    this.handleForm();
  }

  selectEmployee(employee) {
    this.selectedEmployee = Object.assign({}, employee);
    this.form = Object.assign({}, employee);
  }

  getAllEmployees() {
    this.employeesService
      .getEmployees()
      .then(res => this.employees = res.data)
      .catch(err => console.log('error', err));
  }

  save(employee) {
    if (employee.id) {
      this.updateEmployee(employee);
    } else {
      this.createEmployee(employee);
    }
  }

  createEmployee(employee) {
    this.employeesService
      .create(employee)
      .then(res => this.getAllEmployees())
      .catch(err => console.log('error', err))
      .finally(() => this.reset());
  }

  updateEmployee(employee) {
    this.employeesService
      .update(employee)
      .then(res => this.getAllEmployees())
      .catch(err => console.log('error', err))
      .finally(() => this.reset());
  }

  removeEmployee(employeeId) {
    this.employeesService
      .remove(employeeId)
      .then(res => this.getAllEmployees())
      .catch(err => console.log('error', err))
      .finally(() => this.reset());
  }

  reset() {
    this.handleForm();
  }

  handleForm() {
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
