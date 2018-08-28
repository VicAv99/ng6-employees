import angular from 'angular';
import Home from './home/home';
import Employees from './employees/employees';

let componentModule = angular.module('app.components', [
  Home,
  Employees
])

.name;

export default componentModule;
