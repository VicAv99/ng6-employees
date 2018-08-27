import EmployeesListModule from './employeesList';
import EmployeesListController from './employeesList.controller';
import EmployeesListComponent from './employeesList.component';
import EmployeesListTemplate from './employeesList.html';

describe('EmployeesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmployeesListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmployeesListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(EmployeesListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EmployeesListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EmployeesListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EmployeesListController);
    });
  });
});
