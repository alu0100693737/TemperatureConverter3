var assert = chai.assert;

suite('temperature', function() {
   setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/index.html'];
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius and 273.15 Kelvin");
    });
    test('12F = -11.1C', function() {
        original.value = "12F";
        calculate();
        assert.deepEqual(converted.innerHTML, "-11.11 Celsius and 262.04 Kelvin");
    });
    test('6.1C = 43F', function() {
        original.value = "6.1C";
        calculate();
        assert.deepEqual(converted.innerHTML, "42.98 Farenheit and 279.25 Kelvin");
    });
    test('3te = Numero introducido no valido', function() {
        original.value = "3te";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });

    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.00 Farenheit and 318.15 Kelvin");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
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

  /*describe("#calculate", function() {
    it("should log an error if target is passed in", function() {
      (new calculate2(20));

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "missing target")
    });
    it("No hay matches con la ExpReg", function() {
      (new calculate());

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "No encontrado matches")

    });*/


    /*it("should log greetings", function() {
      var greetings = (new Cow("Kate")).greets("Baby");

      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
    });
  });*/
});
