import jwt from 'jsonwebtoken';
import 'dotenv/config'

const secretKey = process.env.JWT_SECRET_KEY


export const home = (req, res) => {
  res.render('home');
};

export const loginForm = (req, res) => {
  res.render('login');
};

export const dashboard = (req, res) => {

  try {
    const { token } = req.cookies
  const { email } = jwt.verify(token, secretKey)

  if(!email){
    return res.status(401).send({ error: "401 Unauthorized", message: "No hay token" })
  
};

  res.render('dashboard', {email})
  } catch (error) {
    res.status(401).send({ error: "401 Unauthorized", message: error.message });
  }

}

export const login = (req, res) => {
const { email, password } = req.body

try {
    //Hacemos la verificacion de que el usuario exista. Si es con BBDD con la funcion que verifica que exista. y si es con archivo con el metodo find verificamos que el usuario exista.

    const token = jwt.sign({email }, secretKey, { expiresIn: 40})

    res.cookie('token', token,{
        httpOnly: true,
        maxAge: 40000
    }).render('dashboard',{email})
} catch (error) {
    res.status(401).send({ error: "Unauthorized", message: error.message })
}

}
