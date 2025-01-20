import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: A simple greeting message
 */
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
});

export default router;
