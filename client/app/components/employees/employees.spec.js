import EmployeesModule from './employees';
import EmployeesController from './employees.controller';
import EmployeesComponent from './employees.component';
import EmployeesTemplate from './employees.html';

describe('Employees', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmployeesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmployeesController();
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
      expect(EmployeesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EmployeesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EmployeesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EmployeesController);
    });
  });
});
