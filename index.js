import express from 'express';
import routes from './routes/router.js'
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));