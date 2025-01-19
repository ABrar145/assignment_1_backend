// test/health.test.ts
import request from 'supertest';
import app from '../src/app';  // Import your Express app

describe('GET /api/v1/health', () => {
  it('should return a 200 status and health information', async () => {
    const response = await request(app).get('/api/v1/health');
    
    // Check if status is 200
    expect(response.status).toBe(200);
    
    // Check if the response has the correct structure
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('version', '1.0.0');
    
    // Ensure uptime is a number
    expect(parseFloat(response.body.uptime)).toBeGreaterThan(0);
  });
});
