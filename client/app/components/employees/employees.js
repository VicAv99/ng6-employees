import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeesComponent from './employees.component';

let employeesModule = angular
  .module('employees', [uiRouter])

  .config($stateProvider => {
    'ngInject';

    $stateProvider.state('employees', {
      url: '/employees',
      component: 'employees'
    });
  })

  .component('employees', employeesComponent).name;

export default employeesModule;
