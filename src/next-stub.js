(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var RETURN_THEN = { then: nx.noop };

  nx.stubString = function(){
    return '';
  };

  nx.stubArray = function(){
    return [];
  };

  nx.stubObject = function(){
    return {};
  };

  nx.stubValue = function (inValue) {
    return inValue;
  };

  nx.stubTrue = function () {
    return true;
  };

  nx.stubFalse = function () {
    return false;
  };

  nx.stubThen = function () {
    return RETURN_THEN;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.stub;
  }

}());
