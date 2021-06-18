// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';
import { formatQuote } from '../lib/utils/utils.js';
import quoteData from '../data/quoteData.js';

describe('quote API munging', () => {
  it('munges quote', async () => {
    const expected = 'People really need help but may attack you if you help them. Help people anyway!';
    const actual = formatQuote(quoteData);
    expect(expected).toEqual(actual);
  });
});

/* describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
 */
