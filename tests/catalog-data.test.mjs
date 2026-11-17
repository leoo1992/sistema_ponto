import test from 'node:test';
import assert from 'node:assert/strict';
import { data as positions } from '../src/utils/Position/data.util.ts';
import { data as sectors } from '../src/utils/Sector/data.util.ts';

for (const [label, records] of [['positions', positions], ['sectors', sectors]]) {
  test(`${label} catalog has unique IDs and complete records`, () => {
    assert.equal(records.length, 15);
    assert.equal(new Set(records.map((record) => record.id)).size, records.length);
    assert.ok(records.every((record) =>
      Number.isInteger(record.id) &&
      typeof record.name === 'string' &&
      record.name.trim().length > 0 &&
      typeof record.status === 'boolean'
    ));
  });
}
