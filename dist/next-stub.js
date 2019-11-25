/*!
 * name: @feizheng/next-stub
 * url: https://github.com/afeiship/next-stub
 * version: 1.0.0
 * date: 2019-11-25T13:17:57.661Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var RETURN_THEN = { then: nx.noop };

  nx.stubString = function() {
    return '';
  };

  nx.stubArray = function() {
    return [];
  };

  nx.stubObject = function() {
    return {};
  };

  nx.stubTrue = function() {
    return true;
  };

  nx.stubFalse = function() {
    return false;
  };

  nx.stubValue = function(inValue) {
    return inValue;
  };

  nx.stubThen = function() {
    return RETURN_THEN;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      stubString: nx.stubString,
      stubArray: nx.stubArray,
      stubObject: nx.stubObject,
      stubTrue: nx.stubTrue,
      stubFalse: nx.stubFalse,
      stubValue: nx.stubValue,
      stubThen: nx.stubThen
    };
  }
})();

//# sourceMappingURL=next-stub.js.map
