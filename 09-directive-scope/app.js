angular.module('bacon', ['ipsumService'])
  .controller('BaconController', BaconController)
  .directive('baconIpsum', baconIpsumDirective);

function BaconController() {
  this.title3 = 'bacon-ipsum s title';
  this.paragraphs3 = 1;
}

function baconIpsumDirective(generator) {

  var fakeData = {
    paragraphs: ['paragraphs data as array of string']
  };

  return {
    // TODO zde budete upravovat definiční objekt directivy
  };
}
