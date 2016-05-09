describe('calculator', function() {

  beforeEach(module('diApp'));

  beforeEach(inject(function(calculator) {
    this.calculator = calculator;
  }));

  it('should return 90 when format is A5 and number of pages is 0', function() {
      var product = {
        pageSize: 'A5',
        numberOfPages: 0
      };

      expect(this.calculator.getPrice(product)).toEqual(90);
  });

  it('should call logger', inject(function($log) {
    spyOn($log, 'log');

    this.calculator.getPrice({});
    expect($log.log).toHaveBeenCalled();
  }));
});
