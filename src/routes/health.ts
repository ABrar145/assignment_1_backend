import { Router, Request, Response } from 'express';

const healthRoutes = Router();

/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Returns server health status
 *     responses:
 *       200:
 *         description: Health status of the server
 */
healthRoutes.get('/', (req: Request, res: Response) => {
  const uptime = process.uptime();
  const timestamp = new Date().toISOString();
  const version = '1.0.0'; // Set your API version here

  res.status(200).json({
    status: 'OK',
    uptime,
    timestamp,
    version,
  });
});

export default healthRoutes;
