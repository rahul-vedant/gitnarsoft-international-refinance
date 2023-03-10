import swaggerUi from "swagger-ui-express";
import leadRoutes from "../modules/lead/routes.js";
import swaggerDocument from "../swagger.js";
function routes(app) {
    app.get('/', (req, res) => {
        console.log(req.query);
        res.send("<H1>Welcome to Used Car Refinance 2.0</H1>");
    });
    app.get('/healthCheck', (req, res) => {
        console.log(req.query);
        res.send("Ok");
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { swaggerOptions: { docExpansion: "none" } }));
    app.use("/lead", leadRoutes);
}
export default routes;
