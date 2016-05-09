'use strict';

angular.module('diApp', [])

  // TODO 2.1 - vytvořte value defaultProduct

  // TODO 3.1 - vytvořte service calculator

  .controller('CalculatorCtrl', CalculatorController);

function CalculatorController() {

  // TODO 2.2 - použití value v controlleru
  this.product = {
    pageSize: 'A5',
    numberOfPages: 50
  };

  this.getPrice = function() {
    var product = this.product;

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

    console.log('Price : ' + price + " - " + product.numberOfPages + " stran, " + product.pageSize);
    return price;
  };
}
