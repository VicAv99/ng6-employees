import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Employees from './employees/employees';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Employees
])

.name;

export default componentModule;
