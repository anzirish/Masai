import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dish Booking System API",
      version: "1.0.0",
      description: "API documentation for Dish Booking System (Assignment L2)",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // path to your route files where you'll write Swagger docs
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };
