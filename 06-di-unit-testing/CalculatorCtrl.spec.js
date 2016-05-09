describe('calculator controller', function() {
  var controller, calculatorMock;
  var FAKE_VALUE = '424242';

  beforeEach(module('diApp'));

  beforeEach(function() {
    calculatorMock = {
      getPrice: function(product) {
      }
    };

    // TODO 4.2.1 - getPrice by měla vracet FAKE_VALUE
    // TODO 4.1.2 - udělejte z metody getPrice spy

    // TODO 4.1.1 - nahraďte službu calculator falešnou službou calculatorMock
  });

  beforeEach(inject(function($controller) {
    controller = $controller('CalculatorCtrl');
  }));

  it('should call getPrice on calculator (TODO 4.1.3)', function() {
    controller.getPrice();

    // TODO 4.1.3 - otestujte, že byla getPrice volaná
  });

  it('should return value from calculator factory (TODO 4.2.2)', function() {

    // TODO 4.2.2 - otestujte návratovou hodnotu getPrice
  });

  // --------------- nemodifikujte kód níže --------------
  describe('beforeEach', function() {

    it('registers calculatorMock as calculator (TODO 4.1.1)', inject(function(calculator) {
      expect(calculator).toBe(calculatorMock)
    }));

    it('creates spy on getPrice (TODO 4.1.2)', function() {
      expect(calculatorMock.getPrice.calls).toBeDefined();
    });

    it('sets spy to return FAKE_VALUE (TODO 4.2.1)', function() {
      expect(calculatorMock.getPrice()).toBe(FAKE_VALUE);
    });
  })
});
