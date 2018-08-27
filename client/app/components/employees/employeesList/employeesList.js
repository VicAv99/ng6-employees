import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeesListComponent from './employeesList.component';

let employeesListModule = angular.module('employeesList', [
  uiRouter
])

.component('employeesList', employeesListComponent)

.name;

export default employeesListModule;
