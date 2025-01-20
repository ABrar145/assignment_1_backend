import request from 'supertest';
import app from '../src/app';  // Import your Express app

describe('GET /api', () => {
  it('should return a 200 status and a message', async () => {
    const response = await request(app).get('/api');
    
    // Check if status is 200
    expect(response.status).toBe(200);
    
    // Check if the response body has the expected message
    expect(response.body.message).toBe('Hello, world!');
  });
});