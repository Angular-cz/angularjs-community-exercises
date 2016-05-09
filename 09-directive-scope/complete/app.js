angular.module('bacon', ['ipsumService'])
  .controller('BaconController', BaconController)
  .directive('baconIpsum', baconIpsumDirective);

function BaconController() {
  this.title3 = 'bacon-ipsum s title';
  this.paragraphs3 = 1;
}

function baconIpsumDirective(generator) {
  return {
    scope: {
      title: '@',
      title2way: '='
    },
    link: function(scope, element, attributes) {

      scope.data = generator.getParagraphs(attributes.paragraphs);

      var deregParagraphs = attributes.$observe("paragraphs", function() {
        scope.data = generator.getParagraphs(attributes.paragraphs);

        if (parseInt(attributes.paragraphs) === 42) {
          deregParagraphs();
        }
      });
    },
    templateUrl: 'baconIpsum.html'
  };
}
