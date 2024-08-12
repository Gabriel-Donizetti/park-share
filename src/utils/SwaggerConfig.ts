import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API PARK-SHARE',
            version: '1.0.0',
            description: 'Documentação da API',
        },
        servers: [
            {
                url: 'http://localhost:4000', 
                description: 'Servidor local',
            },
        ],
    },
    apis: ['src/routes/*.ts'], 
};

const specs = swaggerJsdoc(options);

export default specs;