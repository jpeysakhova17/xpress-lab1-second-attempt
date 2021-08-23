import express from "express";
import cors from "cors";
import path from 'path';
import routes from "./routes/routing";
import route from "./routes/routing";


const app = express();
const port = 3001;


// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})
