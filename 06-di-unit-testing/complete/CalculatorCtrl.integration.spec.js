describe('calculator controller using real service', function() {

  beforeEach(module('diApp'));

  beforeEach(inject(function($controller) {
    this.controller = $controller('CalculatorCtrl');
  }));

  it('should return 90 when format is A5 and number of pages is 0', function() {
    this.controller.product = {
      pageSize: 'A5',
      numberOfPages: 0
    };

    expect(this.controller.getPrice()).toEqual(90);
  });

  it('should return 120 when format is A5 and number of pages is 50', function() {
    this.controller.product = {
      pageSize: 'A5',
      numberOfPages: 50
    };

    expect(this.controller.getPrice()).toEqual(120);
  });
});
