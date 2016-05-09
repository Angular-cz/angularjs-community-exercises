'use strict';

var defaultProduct = {
  pageSize: 'A5',
  numberOfPages: 50
};

function calculator($log) {
  this.getPrice = function(product) {
    var baseCoverPrice = 70;
    var pagePrice = 3;

    var price = 0;

    switch (product.pageSize) {
      case 'A6':
        price += baseCoverPrice;
        break;
      case 'A5':
        price += baseCoverPrice + 20;
        break;
      case 'A4':
        price += baseCoverPrice + 40;
        break;
    }

    var pagesPrice = Math.ceil(product.numberOfPages / 5) * pagePrice;
    price += pagesPrice;

    $log.log('Price : ' + price + " - " + product.numberOfPages + " stran, " + product.pageSize);
    return price;
  };
}

function CalculatorController(defaultProduct, calculator) {
  this.product = defaultProduct;

  this.getPrice = function() {
    return calculator.getPrice(this.product);
  };
}

angular.module('diApp', [])
  .value('defaultProduct', defaultProduct)
  .service('calculator', calculator)
  .controller('CalculatorCtrl', CalculatorController);
