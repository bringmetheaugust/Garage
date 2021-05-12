import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';

import callmeController from './controllers/callme.js';
import checkSpamMiddleware from './middleWare/checkSpam.js';

const app = express();

app.
    use(cookieParser()).
    use(json()).
    use(urlencoded()).
    use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', '*').
            append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE').
            append('Access-Control-Allow-Headers', 'Content-Type, Authorization').
            append('Access-Control-Allow-Credentials', 'true');
        next();
    });

app.post('/api/callme', checkSpamMiddleware, callmeController);

try {
    app.listen(process.env.APP_PORT || 2101);
} catch(err) {
    console.error(`ошибка старта. ${err}`);
}
