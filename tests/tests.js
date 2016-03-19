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
    test('12k to C = -11.1C', function() {
      var a = new Kelvin("12", "k", "C");
        assert.deepEqual(a.toCelsius(), -11.11);
    });
    test('6.1f to k = 43F y ', function() {
        var a = new Farenheit("6.1");
        assert.deepEqual(a.toKelvin(), 258.61);
        assert.deepEqual(a.toCelsius(), )
    });
    test('3te = Numero introducido no valido', function() {
        original.value = "3te";
        main();
        assert.match(converted.innerHTML, /ERROR/);
    });

    test('45C to k = 113.0 Farenheit', function() {
        original.value = "45C to k";
        main();
        assert.deepEqual(converted.innerHTML, "318.15 Kelvin");
    });
    test('39k to c = -234.15 Celsius', function() {
        original.value = "39k to c";
        main();
        assert.deepEqual(converted.innerHTML, "-234.15 Celsius");
    });
    test('5X = error', function() {
        original.value = "5X";
        main();
        assert.match(converted.innerHTML, /ERROR/);
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
});
*/
