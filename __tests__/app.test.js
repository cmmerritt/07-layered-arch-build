import dotenv from 'dotenv';
import request from 'supertest';
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import app from '../lib/app.js';
import { formatQuote } from '../lib/utils/utils.js';
import quoteData from '../data/quoteData.js';
import Quote from '../models/Quote.js';

dotenv.config();

const testQuote = 'A theatre is the most important sort of house in the world, because that\'s where people are shown what they could be if they wanted, and what they\'d like to be if they dared to and what they really are';

const testQuoteAndAuthor = 'A theatre is the most important sort of house in the world, because that\'s where people are shown what they could be if they wanted, and what they\'d like to be if they dared to and what they really are - Tove Jansson';

describe('quote API munging', () => {
  it('munges quote', async () => {
    const expected = testQuoteAndAuthor;
    const actual = formatQuote(quoteData);
    expect(actual).toEqual(expected);
  });
}); 

describe('demo routes', () => {
  beforeEach(async () => {
    return setup(pool);
  });

  it('adds a new quote to the database and sends a text message', async () => {
    const res = await request(app)
      .post('/api/v1/quotes')
      .send({ quote: testQuote });
    
    expect(res.body).toEqual({ id: '1', quote: testQuote });
  });

  it('gets a quote by id via GET', async () => {
    const quote = await Quote.insert({ quote: 'You miss 100% of the shots you don\'t take - Wayne Gretzky - Michael Scott' });
    return request(app)
      .get(`/api/v1/quotes/${quote.id}`)
      .then((res) => {
        expect(res.body).toEqual(quote);
      });
  });
});

