import express from 'express';
import { home, loginForm, dashboard, login } from '../controllers/controller.js'
const router = express.Router()

router.get('/', home)

router.get('/login', loginForm)

router.get('/dashboard', dashboard)

router.post('/login', login)



router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router