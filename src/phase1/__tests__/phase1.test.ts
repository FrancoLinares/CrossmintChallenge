import { createPolyanets } from '..';
import { REQUESTS_GOAL } from './__mocks__/phase1.goal';

describe('Phase 1', () => {
  test('should match with Phase 1 requests goal', async () => {
    const polyanetsRequests = createPolyanets();

    expect(polyanetsRequests).toStrictEqual(REQUESTS_GOAL);
  });
});
