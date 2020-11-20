/*!
 * name: @jswork/next-stub
 * description: Stub code for next.
 * homepage: https://github.com/afeiship/next-stub
 * version: 1.0.0
 * date: 2020-11-20 18:42:53
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var RETURN_THEN = { then: nx.noop };

  nx.stubString = function () {
    return '';
  };

  nx.stubArray = function () {
    return [];
  };

  nx.stubObject = function () {
    return {};
  };

  nx.stubThen = function () {
    return RETURN_THEN;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      stubString: nx.stubString,
      stubArray: nx.stubArray,
      stubObject: nx.stubObject,
      stubThen: nx.stubThen
    };
  }
})();
