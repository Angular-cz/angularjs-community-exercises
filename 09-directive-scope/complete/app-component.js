angular.module('bacon', ['ipsumService'])
  .controller('BaconController', BaconController)
  .component('baconIpsum', {
    // pro správnou funkci komponenty je nutné v šabloně číst data z controlleru
    // bacon.title, bacon.data, ...

    bindings: {
      title: '@',
      title2way: '=',
      paragraphs: '@'
    },
    templateUrl: 'baconIpsum.html',
    controller: function(generator) {
      this.loadParagraphs = function() {
        this.data = generator.getParagraphs(this.paragraphs);
      };

      this.$onChanges = function(changesObj) {
        console.log('$onChanges', changesObj);

        if (changesObj.paragraphs) {
          this.loadParagraphs();
        }

      };

      this.loadParagraphs();
    },
    controllerAs: 'bacon'
  });

function BaconController() {
  this.title3 = 'bacon-ipsum s title';
  this.paragraphs3 = 1;
}


