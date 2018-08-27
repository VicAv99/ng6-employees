import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeesComponent from './employees.component';
import employeesList from './employeesList/employeesList';
import employeesDetails from './employeesDetails/employeesDetails';

let employeesModule = angular
  .module('employees', [
    uiRouter,
    employeesList,
    employeesDetails
  ])

  .config($stateProvider => {
    'ngInject';

    $stateProvider.state('employees', {
      url: '/employees',
      component: 'employees'
    });
  })

  .component('employees', employeesComponent).name;

export default employeesModule;
