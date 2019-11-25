const nx = require('@feizheng/next-js-core2');
require('../src/next-stub');

describe('api.basic test', () => {
  test('nx.stub', function() {
    const obj1 = { name: 'fei' };
    const obj2 = { email: '1290657123@qq.com' };
    const result = {};
    nx.stub(result, obj1, obj2);
    expect(result.name, obj1.name).toBe(null);
  });
});
