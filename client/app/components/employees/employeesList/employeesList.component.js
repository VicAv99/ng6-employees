import template from './employeesList.html';
import controller from './employeesList.controller';
import './employeesList.scss';

const bindings = {
  employees: '<'
}

let employeesListComponent = {
  bindings,
  template,
  controller
};

export default employeesListComponent;
