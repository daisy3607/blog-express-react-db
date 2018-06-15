import express from 'express';
import bodyParser from 'body-parser';
import posts from './routes/posts.routes';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => res.send('Hello ccc!'));
app.use('/api', posts);

app.listen(4000, () => {
    console.log('server started - 4000');
});

