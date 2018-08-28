import template from './employeesDetails.html';
import controller from './employeesDetails.controller';
import './employeesDetails.scss';

const bindings = {
  form: '<',
  cancelled: '&'
}

let employeesDetailsComponent = {
  bindings,
  template,
  controller
};

export default employeesDetailsComponent;
