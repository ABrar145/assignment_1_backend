"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthRoutes = (0, express_1.Router)();
/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Returns server health status
 *     responses:
 *       200:
 *         description: Health status of the server
 */
healthRoutes.get('/', (req, res) => {
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
exports.default = healthRoutes;
