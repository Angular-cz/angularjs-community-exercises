describe('ipsumService generator', function() {

  function getUrl(params) {

    var defaultParameters = {
      callback: 'JSON_CALLBACK',
      paras: 1,
      'start-with-lorem': 0,
      type: 'meat-and-filler'
    };

    var urlParams = angular.extend(defaultParameters, params);

    var urlQuery = Object.keys(urlParams).map(function(key) {
      return key + '=' + urlParams[key];
    }).join('&');

    return '//baconipsum.com/api/?' + urlQuery;
  };

  beforeEach(module('ipsumService'));

  describe('response', function() {

    it('should return object with empty array paragraphs after getParagraphs call', inject(function(generator, $httpBackend) {

      $httpBackend.expectJSONP(getUrl())
        .respond(['some response data']);

      var data = generator.getParagraphs();
      expect(data).toEqual({paragraphs: []});

      $httpBackend.flush();

    }));

    it('should update data after http response', inject(function(generator, $httpBackend) {
      var expectedResponse = ['first paragraph', 'second paragraph'];

      $httpBackend.whenJSONP(getUrl())
        .respond(expectedResponse);

      var data = generator.getParagraphs();
      expect(data)
        .toEqual({paragraphs: []});

      $httpBackend.flush();

      expect(data)
        .toEqual({
          paragraphs: expectedResponse
        });
    }));
  });

  describe('parameters', function() {
    it('should use default parameters, if is called without parameters', inject(function(generator, $httpBackend) {

      $httpBackend.expectJSONP(getUrl()).respond([]);
      generator.getParagraphs();
      $httpBackend.flush();

    }));

    it('should accept count parameter', inject(function(generator, $httpBackend) {

      $httpBackend.expectJSONP(getUrl({paras: 5})).respond([]);
      generator.getParagraphs(5);
      $httpBackend.flush();

    }));

    it('should accept startWithBaconIpsum parameter', inject(function(generator, $httpBackend) {

      $httpBackend.expectJSONP(getUrl({paras: 6, 'start-with-lorem': 1})).respond([]);
      generator.getParagraphs(6, true);
      $httpBackend.flush();

    }));
  });
});
