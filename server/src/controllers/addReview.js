import { promises as fs } from 'fs';

import { REVIEWS_FILE } from '../constants/db.js';

export default async function({ body }, res) {
    try {
        const { name, raiting, text } = body;

        if (!name || !raiting ) throw Error;

        try {
            const reviews = await fs.readFile(REVIEWS_FILE);
            await fs.writeFile(REVIEWS_FILE, JSON.stringify([ ...JSON.parse(reviews), body ]));
            res.sendStatus(200);
        } catch(err) {
            console.error(err);
            res.sendStatus(500);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
