'use strict';

function ContactlistController(dataStorage) {
  this.dataStorage = dataStorage;

  this.save = function(form) {
    if (form.$invalid) {
      return;
    }

    dataStorage.save(this.contactlist);
    form.$setPristine();
    form.$setUntouched();
  };

  this.reset = function(form) {
    this.contactlist = dataStorage.get();
    form.$setPristine();
    form.$setUntouched();
  };

  this.addContact = function() {
    // TODO 5 oživte přidávání kontaktů

  };

  this.removeContact = function(index) {
    this.contactlist.contacts.splice(index, 1);
  };

  this.contactlist = dataStorage.get();

}

function validateCzechPhoneNumberDirective() {
  var pattern = /^(\+420)?( ?\d{3}){3}$/;

  // TODO 4.1 definujte validátor českého čísla
  return {};
}

angular.module('FormApp', ['ngMessages', 'ngStorage'])
  .controller('ContactlistController', ContactlistController)
  .directive('validateCzechPhoneNumber', validateCzechPhoneNumberDirective);

// --------------- nemodifikujte kód níže --------------

// Definiční objekt komponenty validation-messages

var validationMessagesComponent = {
  templateUrl: 'validationMessages.html',
  transclude: true,
  bindings: {
    inputField: "<",
    name: "@",
    params: "<"
  },
  controller: function() {
    this.name = this.name || "Field";

    this.isFormSubmitted = function() {
      var form = this.inputField.$$parentForm;
      while (!!form) {
        if (form.$submitted) {
          return true;
        }
        form = form.$$parentForm;
      }
      return false;
    };
  },
  controllerAs: 'vm'
};

angular.module('FormApp')
  .component('validationMessages', validationMessagesComponent)
  .service('dataStorage', DataStorage);

function DataStorage($sessionStorage) {
  this.dataStorage = $sessionStorage.$default({
    contactlist: {
      name: '',
      contacts: [
        {name: 'Petr', phone: '+420123123123'}
      ]
    }
  });

  this.get = function() {
    return angular.copy(this.dataStorage.contactlist);
  };

  this.save = function(contactlist) {
    this.dataStorage.contactlist = angular.copy(contactlist);
  };
}


