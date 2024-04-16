import { createPlanets } from '..';
import { REQUESTS_GOAL } from './__mocks__/phase2.goal';

describe('Phase 2', () => {
  test('should match with Phase 2 requests goal', async () => {
    const planetsRequests = createPlanets();

    expect(planetsRequests).toStrictEqual(REQUESTS_GOAL);
  });
});
