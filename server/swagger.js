import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Loklok clone API',
        description: 'API documentation',
    },
    host: 'localhost:8000', // Replace with your Render URL
    schemes: ['http', 'https'],
    basePath: '/api',
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/auth.js']; // Adjust the path to your route files

swaggerAutogen()(outputFile, endpointsFiles, doc)
    .then(() => {
        console.log('Swagger documentation generated successfully');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Error generating Swagger documentation:', err);
        process.exit(1);
    });