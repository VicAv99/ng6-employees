import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeesDetailsComponent from './employeesDetails.component';

let employeesDetailsModule = angular.module('employeesDetails', [
  uiRouter
])

.component('employeesDetails', employeesDetailsComponent)

.name;

export default employeesDetailsModule;
