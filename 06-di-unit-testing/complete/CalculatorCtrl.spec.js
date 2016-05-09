describe('calculator controller', function() {
  var controller, calculatorMock;
  var FAKE_VALUE = '999';

  beforeEach(module('diApp'));

  beforeEach(function() {
    calculatorMock = {
      getPrice: function(product) {
      }
    };

    spyOn(calculatorMock, 'getPrice').and.returnValue(FAKE_VALUE);

    module({
      calculator : calculatorMock
    });
  });

  beforeEach(inject(function($controller) {
    controller = $controller('CalculatorCtrl');
  }));

  it('should call getPrice on calculator with default product if getPrice is called', function() {
    controller.getPrice();
    expect(calculatorMock.getPrice).toHaveBeenCalledWith(controller.product);
  });

  it('should return value from calculator factory', function() {
    expect(controller.getPrice()).toEqual(FAKE_VALUE);
  });
});
