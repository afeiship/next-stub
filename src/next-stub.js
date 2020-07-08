(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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
