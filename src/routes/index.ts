import { Router } from "express";
const router = Router();

import { getUsers, createUser, getUserById, updateUser, deleteUser } from "../controller/users.controller";

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;