import EmployeesDetailsModule from './employeesDetails';
import EmployeesDetailsController from './employeesDetails.controller';
import EmployeesDetailsComponent from './employeesDetails.component';
import EmployeesDetailsTemplate from './employeesDetails.html';

describe('EmployeesDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmployeesDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmployeesDetailsController();
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
      expect(EmployeesDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EmployeesDetailsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EmployeesDetailsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EmployeesDetailsController);
    });
  });
});
