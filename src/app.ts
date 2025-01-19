import express from 'express';
import routes from './routes'; // Your other routes
import healthRoutes from './routes/health'; // Health check routes
import setupSwagger from './swagger';

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use('/api/v1/health', healthRoutes); // Add health check routes here

// Setup Swagger
setupSwagger(app);

export default app;