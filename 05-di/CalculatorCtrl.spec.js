describe('calculator controller', function() {
  var controller;

  beforeEach(module('diApp'));

  beforeEach(inject(function($controller) {

    controller = $controller('CalculatorCtrl', {});

  }));

  it('should return 90 when format is A5 and number of pages is 0', function() {

    setProduct({
      pageSize: 'A5',
      numberOfPages: 0
    });

    expect(controller.getPrice()).toEqual(90);

  });

  it('should return 120 when format is A5 and number of pages is 50', function() {

    setProduct({
      pageSize: 'A5',
      numberOfPages: 50
    });

    expect(controller.getPrice()).toEqual(120);
  });

  function setProduct(product) {
    angular.merge(controller.product, {pageSize: null, numberOfPages: null}, product);
  }
});
