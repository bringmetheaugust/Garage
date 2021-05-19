import { promises as fs } from 'fs';

const REVIEWS_FILE = './db/reviews_db.json';

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
