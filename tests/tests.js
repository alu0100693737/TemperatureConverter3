var assert = chai.assert;

suite('temperature', function() {
   setup(function(){
      if (typeof __html__ !== 'undefined') {
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });
    test('32F to C = 0C', function() {
      var a = new Farenheit("32", "F", "C");
        assert.deepEqual(a.toCelsius(), 0);
    });
    test('12k to C = -261.15C', function() {
      var a = new Kelvin("12", "k", "C");
        assert.deepEqual(a.toCelsius(), -261.15);
    });
    test('6.1f', function() {
        var a = new Farenheit("6.1");
        assert.deepEqual(a.toKelvin().toFixed(2), "258.61");
        assert.deepEqual(a.toCelsius().toFixed(2), '-14.39');
    });
    test('39k to c = -234.15 Celsius', function() {
      var a = new Kelvin("39");
        assert.deepEqual(a.toCelsius().toFixed(2), '-234.15');
    });
    test('0c to f = 32 Celsius', function() {
      var a = new Celsius("0");
        assert.deepEqual(a.toFarenheit().toFixed(2), '32.00');
    });
    test('39c to k = 312.15 Kelvin', function() {
      var a = new Celsius("39");
        assert.deepEqual(a.toKelvin().toFixed(2), '312.15');
    });

});
/*
describe("Pruebas Sinon", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  // ...

  describe("#main", function() {
    it("No hay logs ni errores", function() {
      (new main());
      sinon.assert.notCalled(console.log);
      sinon.assert.notCalled(console.error);
    });
  });
});*/
