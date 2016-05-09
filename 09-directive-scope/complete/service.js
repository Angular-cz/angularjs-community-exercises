function Generator($http) {
  this.getParagraphs = function(count, startWithBaconIpsum) {
    var data = {
      paragraphs: []
    };

    count = count || 1;
    $http
      .jsonp('//baconipsum.com/api/', {
        params: {
          type: 'meat-and-filler',
          paras: count,
          'start-with-lorem': startWithBaconIpsum ? 1 : 0,
          callback: 'JSON_CALLBACK'
        }
      })
      .then(
        function(response) {
          data.paragraphs = response.data;
        },
        function() {
          data.paragraphs = ['nepodařilo se získat text'];
        }
      );

    return data;
  };
}

angular.module('ipsumService', [])
  .service('generator', Generator);
