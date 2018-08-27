import angular from 'angular';

class EmployeesService {
  url = 'https://levelup-json.now.sh/employees';

  constructor($http) {
    'ngInject';
    this.http = $http;
  }

  getEmployees() {
    return this.http
      .get(this.url);
  }

  getEmployee(employeeId) {
    return this.http
      .get(`${this.url}/${employeeId}`);
  }

  searchEmployee(search) {
    const params = { params: { q: search } };
    return this.http
      .get(`${this.url}`, params);
  }

  create(employee) {
    return this.http
      .post(this.url, employee);
  }

  update(employee) {
    return this.http
      .patch(`${this.url}/${employee.id}`, employee);
  }

  remove(employeeId) {
    return this.http
      .delete(`${this.url}/${employeeId}`);
  }
}

let employeesService = angular
  .module('employeesService', [])
  .service('employeesService', EmployeesService).name;

export default employeesService;
