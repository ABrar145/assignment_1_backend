"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes")); // Your other routes
const health_1 = __importDefault(require("./routes/health")); // Health check routes
const swagger_1 = __importDefault(require("./swagger"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use('/api/v1/health', health_1.default); // Add health check routes here
// Setup Swagger
(0, swagger_1.default)(app);
exports.default = app;
