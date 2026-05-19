const swaggerJsdoc = require("swagger-jsdoc");

const options = {

  definition: {
    openapi: "3.0.0",

    info: {
      title: "Card Validator API",
      version: "1.0.0",
      description: "API profissional para validação de cartões"
    },

    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },

  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;