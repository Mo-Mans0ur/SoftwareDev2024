import express from "express";
const app = express();

import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
    definition: {
      openapi: '3.1.0',
      info: {
        title: 'Users API',
        version: '0.0.1',
      },
    },
    apis: ["./routers/*.js"],
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./routers/*.js"],
};

import swaggerUi from "swagger-ui-express";
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));


import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));


/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/api/users", (req, res) => {
  res.send({ data: users });
});

/**
 * @openapi
 * /api/users:
 *   post:
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: Returns the users that was created
 */
router.get("/api/users", (req, res) => {
    res.send({ data: users });
  });

router.get("/api/users", (req, res) => {
  res.send({ data: users });
});

router.post("/api/users", (req, res) => {
  const newUser = req.body;

  users.push(newUser);
  res.send({ data: newUser });
});

export default usersRouter;
