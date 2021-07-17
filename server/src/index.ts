import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';

import apiRouter from './routers/apiRouter';
import staticRouter from './routers/staticRouter';

const { SERVER_PORT } = process.env;

const app = express();

app.
    use(cookieParser()).
    use(json()).
    use(urlencoded()).
    use((_, res, next) => {
        res.append('Access-Control-Allow-Origin', '*').
            append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE').
            append('Access-Control-Allow-Headers', 'Content-Type, Authorization').
            append('Access-Control-Allow-Credentials', 'true');
        next();
    });

app.use('/api', apiRouter);
app.use('/', staticRouter);

try {
    app.listen(SERVER_PORT || 2101);
} catch(err) {
    console.error(`start error: ${err}`);
}
