import { UserController } from "@controllers/UserController";
import { Router } from "express";

const routes: Router = Router();

/**
 * @swagger
 * definitions:
 *   UserDTO:
 *     type: object
 *     properties:
 *       nome:
 *         type: string
 *       email:
 *         type: string 
 *       senha:
 *         type: string
 *       telefone:
 *         type: string
 *        
 */

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Cria um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/UserDTO'
 *     responses:
 *       '200':
 *         description: Usuário criado com sucesso.
 *       '502':
 *         description: Erro ao criar usuário.
 */
routes.post("/signin", UserController.create)
/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           description: O email do usuário
 *           example: user@example.com
 *         senha:
 *           type: string
 *           description: A senha do usuário
 *           example: password123
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login de usuário.
 *     tags: 
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Usuário logado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticação
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Requisição inválida, email ou senha incorretos.
 *       502:
 *         description: Erro ao fazer login.
 */

routes.post("/login", UserController.login)


// routes.get("/",UserController.get)

// routes.put("/",UserController.update)

// routes.delete("/",UserController.delete)

export default routes;