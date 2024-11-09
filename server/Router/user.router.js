import express from 'express'
import { Login, Logout, Register } from '../Controller/user'



const router = express.Router()
router.post("/Register",Register)
router.post("/Login",Login)
router.get("/getalluser",Logout)
export default router