import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeesComponent from './employees.component';
import employeesList from './employeesList/employeesList';
import employeesDetails from './employeesDetails/employeesDetails';
import employeesService from './employees.service';

let employeesModule = angular
  .module('employees', [
    uiRouter,
    employeesList,
    employeesDetails,
    employeesService
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
