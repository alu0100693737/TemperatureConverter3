var assert = chai.assert;

suite('temperature', function() {
   setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/index.html'];
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });
    test('32F to C = 0C', function() {
        original.value = "32F to C";
        main();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius");
    });
    test('12F to C = -11.1C', function() {
        original.value = "12F to C";
        main();
        assert.deepEqual(converted.innerHTML, "-11.11 Celsius");
    });
    test('6.1f to k = 43F', function() {
        original.value = "6.1f to k";
        main();
        assert.deepEqual(converted.innerHTML, "258.61 Kelvin");
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
    test('5X = error', function() {
        original.value = "5X";
        main();
        assert.match(converted.innerHTML, /ERROR/);
    });
});


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
