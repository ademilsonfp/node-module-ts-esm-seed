
import tap from 'tap';

import Example from '../src/index.js';

tap.test('(new Example(2)).reveal(10)', function (tap) {
  const example = new Example(10);

  tap.equal(example.multiply(10), 100, 'should be equal to 100');
  tap.end();
});
