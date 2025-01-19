"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: A simple greeting message
 */
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});
exports.default = router;
