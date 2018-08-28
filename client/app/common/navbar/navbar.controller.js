class NavbarController {
  title = 'NG6 Employees';
  navLinks = [
    { link: 'home', label: 'HOME' },
    { link: 'employees', label: 'EMPLOYEES' }
  ];
  constructor() {
    this.form = {
      search: ''
    }
  }
}

export default NavbarController;
